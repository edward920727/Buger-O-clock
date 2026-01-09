# Burger O'clock Automation Deployment Script
# Purpose: One-click build, clean, and deploy process

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Burger O'clock Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Run npm run build
Write-Host "[1/4] Running npm run build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed! Please check error messages." -ForegroundColor Red
    exit 1
}
Write-Host "OK: Build completed" -ForegroundColor Green
Write-Host ""

# Step 2: Clean old assets folder in root directory
Write-Host "[2/4] Cleaning old assets folder..." -ForegroundColor Yellow
if (Test-Path "assets") {
    Remove-Item -Path "assets" -Recurse -Force
    Write-Host "OK: Old assets folder deleted" -ForegroundColor Green
} else {
    Write-Host "INFO: assets folder does not exist, skipping" -ForegroundColor Gray
}
Write-Host ""

# Step 3: Copy all content from dist/ to root directory
Write-Host "[3/4] Copying dist/ content to root directory..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Copy-Item -Path "dist\*" -Destination "." -Recurse -Force
    Write-Host "OK: Files copied" -ForegroundColor Green
    
    # Ensure .nojekyll file exists in root (for GitHub Pages)
    if (Test-Path ".nojekyll") {
        Write-Host "OK: .nojekyll file exists" -ForegroundColor Green
    } else {
        New-Item -Path ".nojekyll" -ItemType File -Force | Out-Null
        Write-Host "OK: .nojekyll file created" -ForegroundColor Green
    }
} else {
    Write-Host "ERROR: dist folder does not exist! Build may have failed." -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 4: Verify file references
Write-Host "[4/4] Verifying file references..." -ForegroundColor Yellow

# Check files in assets folder
$assetsFiles = Get-ChildItem -Path "assets" -File | Select-Object -ExpandProperty Name
$jsFiles = $assetsFiles | Where-Object { $_ -like "index-*.js" }
$cssFiles = $assetsFiles | Where-Object { $_ -like "index-*.css" }

if ($jsFiles.Count -eq 0 -or $cssFiles.Count -eq 0) {
    Write-Host "ERROR: Required files missing in assets folder!" -ForegroundColor Red
    exit 1
}

# Read index.html and check references
$indexHtml = Get-Content "index.html" -Raw -Encoding UTF8
$jsFile = $jsFiles[0]
$cssFile = $cssFiles[0]

# Check JS reference - use more robust pattern matching
$jsPattern = 'src="\./assets/([^"]+)"'
if ($indexHtml -match $jsPattern) {
    $referencedJs = $matches[1]
    if ($referencedJs -ne $jsFile) {
        Write-Host "WARNING: index.html JS reference ($referencedJs) does not match actual file ($jsFile)" -ForegroundColor Yellow
        Write-Host "  Auto-fixing..." -ForegroundColor Yellow
        $indexHtml = $indexHtml -replace [regex]::Escape("src=`"./assets/$referencedJs`""), "src=`"./assets/$jsFile`""
    } else {
        Write-Host "OK: JS reference correct: $jsFile" -ForegroundColor Green
    }
} else {
    Write-Host "WARNING: Could not find JS reference in index.html" -ForegroundColor Yellow
    Write-Host "  Auto-fixing JS reference..." -ForegroundColor Yellow
    # Find and replace the script tag
    $scriptPattern = '<script type="module" crossorigin src="[^"]+"></script>'
    $newScriptTag = "<script type=`"module`" crossorigin src=`"./assets/$jsFile`"></script>"
    $indexHtml = $indexHtml -replace $scriptPattern, $newScriptTag
}

# Check CSS reference - use more robust pattern matching
$cssPattern = 'href="\./assets/([^"]+)"'
if ($indexHtml -match $cssPattern) {
    $referencedCss = $matches[1]
    if ($referencedCss -ne $cssFile) {
        Write-Host "WARNING: index.html CSS reference ($referencedCss) does not match actual file ($cssFile)" -ForegroundColor Yellow
        Write-Host "  Auto-fixing..." -ForegroundColor Yellow
        $indexHtml = $indexHtml -replace [regex]::Escape("href=`"./assets/$referencedCss`""), "href=`"./assets/$cssFile`""
    } else {
        Write-Host "OK: CSS reference correct: $cssFile" -ForegroundColor Green
    }
} else {
    Write-Host "WARNING: Could not find CSS reference in index.html" -ForegroundColor Yellow
    Write-Host "  Auto-fixing CSS reference..." -ForegroundColor Yellow
    # Find and replace the link tag
    $linkPattern = '<link rel="stylesheet" crossorigin href="[^"]+">'
    $newLinkTag = "<link rel=`"stylesheet`" crossorigin href=`"./assets/$cssFile`">"
    $indexHtml = $indexHtml -replace $linkPattern, $newLinkTag
}

# Save the fixed index.html
[System.IO.File]::WriteAllText((Resolve-Path "index.html"), $indexHtml, [System.Text.Encoding]::UTF8)

# Step 5: Fix 404-template.html files if they exist
Write-Host "[5/5] Fixing 404-template.html files..." -ForegroundColor Yellow
$templateFiles = @("404-template.html", "public\404-template.html", "dist\404-template.html")
foreach ($templateFile in $templateFiles) {
    if (Test-Path $templateFile) {
        $templateContent = Get-Content $templateFile -Raw -Encoding UTF8
        if ($templateContent -match 'src="[^"]*assets/([^"]+)"') {
            $oldJsRef = $matches[1]
            if ($oldJsRef -ne $jsFile) {
                Write-Host "  Fixing $templateFile JS reference..." -ForegroundColor Gray
                $templateContent = $templateContent -replace [regex]::Escape("src=`"./assets/$oldJsRef`""), "src=`"./assets/$jsFile`""
                $templateContent = $templateContent -replace [regex]::Escape("src=`"/12/assets/$oldJsRef`""), "src=`"./assets/$jsFile`""
            }
        }
        if ($templateContent -match 'href="[^"]*assets/([^"]+)"') {
            $oldCssRef = $matches[1]
            if ($oldCssRef -ne $cssFile) {
                Write-Host "  Fixing $templateFile CSS reference..." -ForegroundColor Gray
                $templateContent = $templateContent -replace [regex]::Escape("href=`"./assets/$oldCssRef`""), "href=`"./assets/$cssFile`""
                $templateContent = $templateContent -replace [regex]::Escape("href=`"/12/assets/$oldCssRef`""), "href=`"./assets/$cssFile`""
            }
        }
        [System.IO.File]::WriteAllText((Resolve-Path $templateFile), $templateContent, [System.Text.Encoding]::UTF8)
        Write-Host "  OK: $templateFile updated" -ForegroundColor Green
    }
}
Write-Host ""

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "OK: Deployment completed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Build files updated to root directory" -ForegroundColor White
Write-Host "File references verified and fixed" -ForegroundColor White
Write-Host ""
Write-Host "Next step: Push root directory files to GitHub Pages" -ForegroundColor Yellow
