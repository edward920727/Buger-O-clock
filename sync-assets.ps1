# Burger O'clock 同步脚本
# 清空旧文件 -> 重新打包 -> 精确搬移 -> 自动对齐 HTML -> 删除 dist

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Burger O'clock 同步流程" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 步骤 1: 准备 index.html 用于构建（移除旧的资源引用，使用 Vite 入口点）
Write-Host "[1/6] 准备 index.html 用于构建..." -ForegroundColor Yellow
$rootIndexHtml = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)
$backupIndexHtml = $rootIndexHtml

# 替换旧的资源引用为 Vite 开发入口点
$rootIndexHtml = $rootIndexHtml -replace '<script type="module" crossorigin src="\./assets/[^"]+\.js"></script>', '<script type="module" src="/src/main.jsx"></script>'
$rootIndexHtml = $rootIndexHtml -replace '<link rel="stylesheet" crossorigin href="\./assets/[^"]+\.css">', ''

# 保存修改后的 index.html
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("index.html", $rootIndexHtml, $utf8NoBom)
Write-Host "OK: index.html 已准备用于构建" -ForegroundColor Green
Write-Host ""

# 步骤 2: 清空根目录 assets/ 文件夹内的所有内容
Write-Host "[2/6] 清空根目录 assets/ 文件夹..." -ForegroundColor Yellow
if (Test-Path "assets") {
    # 删除 assets 文件夹内的所有内容，但保留文件夹本身
    Get-ChildItem -Path "assets" -Recurse | Remove-Item -Force -Recurse
    Write-Host "OK: assets/ 文件夹已清空" -ForegroundColor Green
} else {
    # 如果 assets 文件夹不存在，创建它
    New-Item -Path "assets" -ItemType Directory -Force | Out-Null
    Write-Host "OK: assets/ 文件夹已创建" -ForegroundColor Green
}
Write-Host ""

# 步骤 3: 重新打包
Write-Host "[3/6] 执行 npm run build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    # 恢复原始的 index.html
    [System.IO.File]::WriteAllText("index.html", $backupIndexHtml, $utf8NoBom)
    Write-Host "ERROR: 打包失败！index.html 已恢复。请检查错误信息。" -ForegroundColor Red
    exit 1
}
Write-Host "OK: 打包完成" -ForegroundColor Green
Write-Host ""

# 步骤 4: 精确搬移 - 将 dist/assets/ 内的最新文件搬移到根目录的 assets/
Write-Host "[4/6] 搬移 dist/assets/ 文件到根目录 assets/..." -ForegroundColor Yellow
if (-not (Test-Path "dist\assets")) {
    # 恢复原始的 index.html
    [System.IO.File]::WriteAllText("index.html", $backupIndexHtml, $utf8NoBom)
    Write-Host "ERROR: dist/assets/ 文件夹不存在！打包可能失败。index.html 已恢复。" -ForegroundColor Red
    exit 1
}

$distAssetsFiles = Get-ChildItem -Path "dist\assets" -File
if ($distAssetsFiles.Count -eq 0) {
    # 恢复原始的 index.html
    [System.IO.File]::WriteAllText("index.html", $backupIndexHtml, $utf8NoBom)
    Write-Host "ERROR: dist/assets/ 文件夹为空！index.html 已恢复。" -ForegroundColor Red
    exit 1
}

# 复制所有文件到根目录 assets/
Copy-Item -Path "dist\assets\*" -Destination "assets\" -Force
Write-Host "OK: 已搬移 $($distAssetsFiles.Count) 个文件到 assets/" -ForegroundColor Green

# 显示搬移的文件
foreach ($file in $distAssetsFiles) {
    Write-Host "  -> $($file.Name)" -ForegroundColor Gray
}
Write-Host ""

# 步骤 5: 自动对齐根目录 HTML - 更新 index.html 中的文件名引用
Write-Host "[5/6] 更新根目录 index.html 的文件引用..." -ForegroundColor Yellow

# 读取 dist/index.html 来获取最新的文件名
if (-not (Test-Path "dist\index.html")) {
    # 恢复原始的 index.html
    [System.IO.File]::WriteAllText("index.html", $backupIndexHtml, $utf8NoBom)
    Write-Host "ERROR: dist/index.html 不存在！index.html 已恢复。" -ForegroundColor Red
    exit 1
}

$distIndexHtml = [System.IO.File]::ReadAllText("dist\index.html", [System.Text.Encoding]::UTF8)

# 使用正则表达式提取 JS 和 CSS 文件名
$jsPattern = 'src="\./assets/([^"]+\.js)"'
$cssPattern = 'href="\./assets/([^"]+\.css)"'

$jsMatch = [regex]::Match($distIndexHtml, $jsPattern)
$cssMatch = [regex]::Match($distIndexHtml, $cssPattern)

if (-not $jsMatch.Success) {
    # 恢复原始的 index.html
    [System.IO.File]::WriteAllText("index.html", $backupIndexHtml, $utf8NoBom)
    Write-Host "ERROR: 无法从 dist/index.html 中提取 JS 文件名！index.html 已恢复。" -ForegroundColor Red
    exit 1
}

if (-not $cssMatch.Success) {
    # 恢复原始的 index.html
    [System.IO.File]::WriteAllText("index.html", $backupIndexHtml, $utf8NoBom)
    Write-Host "ERROR: 无法从 dist/index.html 中提取 CSS 文件名！index.html 已恢复。" -ForegroundColor Red
    exit 1
}

$latestJsFile = $jsMatch.Groups[1].Value
$latestCssFile = $cssMatch.Groups[1].Value

Write-Host "  找到最新 JS 文件: $latestJsFile" -ForegroundColor Gray
Write-Host "  找到最新 CSS 文件: $latestCssFile" -ForegroundColor Gray

# 读取根目录的 index.html（当前是开发模式版本）
$rootIndexHtml = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)

# 替换 Vite 开发入口点为生产环境的资源引用
$rootIndexHtml = $rootIndexHtml -replace '<script type="module" src="/src/main\.jsx"></script>', "<script type=`"module`" crossorigin src=`"./assets/$latestJsFile`"></script>"

# 添加 CSS 引用（在 script 标签之后）
$scriptTagPattern = '(<script type="module" crossorigin src="\./assets/[^"]+\.js"></script>)'
$replacement = "`$1`r`n    <link rel=`"stylesheet`" crossorigin href=`"./assets/$latestCssFile`">"
$rootIndexHtml = $rootIndexHtml -replace $scriptTagPattern, $replacement

# 保存更新后的 index.html（使用 UTF-8 无 BOM 编码）
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("index.html", $rootIndexHtml, $utf8NoBom)

Write-Host "OK: index.html 已更新" -ForegroundColor Green
Write-Host ""

# 步骤 6: 删除 dist 文件夹
Write-Host "[6/6] 删除 dist/ 文件夹..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
    Write-Host "OK: dist/ 文件夹已删除" -ForegroundColor Green
} else {
    Write-Host "  (dist/ 文件夹不存在，跳过)" -ForegroundColor Gray
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "OK: 同步流程完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "所有文件已同步到根目录" -ForegroundColor White
Write-Host "index.html 已自动更新文件引用" -ForegroundColor White
Write-Host ""
