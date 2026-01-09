# Burger O'clock Sync Script
# Clear old files -> Restore template -> Rebuild -> Update HTML -> Move assets -> Delete dist

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Burger O'clock Sync Process" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clear old assets folder
Write-Host "[1/6] Clearing old assets folder..." -ForegroundColor Yellow
if (Test-Path "assets") {
    Remove-Item -Path "assets\*" -Recurse -Force
    Write-Host "OK: Assets folder cleared" -ForegroundColor Green
} else {
    New-Item -Path "assets" -ItemType Directory -Force | Out-Null
    Write-Host "OK: Assets folder created" -ForegroundColor Green
}
Write-Host ""

# Step 2: Backup and restore index.html template for Vite build
Write-Host "[2/6] Preparing index.html template for Vite build..." -ForegroundColor Yellow

# Read current index.html as UTF-8
$originalContent = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)

# Create backup
$backupContent = $originalContent

# Replace script and link tags with Vite entry point for building
# Remove old asset references and add Vite dev entry point
$templateContent = $originalContent -replace '<script type="module" crossorigin src="\./assets/[^"]+\.js"></script>', '<script type="module" src="/src/main.jsx"></script>'
$templateContent = $templateContent -replace '<link rel="stylesheet" crossorigin href="\./assets/[^"]+\.css">', ''

# Write back with UTF-8 encoding without BOM to preserve Chinese characters
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("index.html", $templateContent, $utf8NoBom)

Write-Host "OK: index.html template prepared for Vite build" -ForegroundColor Green
Write-Host ""

# Step 3: Rebuild
Write-Host "[3/6] Running npm run build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    # Restore original on failure
    [System.IO.File]::WriteAllText("index.html", $backupContent, $utf8NoBom)
    Write-Host "ERROR: Build failed! index.html has been restored." -ForegroundColor Red
    exit 1
}
Write-Host "OK: Build completed" -ForegroundColor Green
Write-Host ""

# Step 4: Move files from dist/assets/ to root assets/
Write-Host "[4/6] Moving files from dist/assets/ to root assets/..." -ForegroundColor Yellow
if (Test-Path "dist\assets") {
    $distAssetsFiles = Get-ChildItem -Path "dist\assets" -File
    if ($distAssetsFiles.Count -eq 0) {
        [System.IO.File]::WriteAllText("index.html", $backupContent, $utf8NoBom)
        Write-Host "ERROR: dist/assets/ folder is empty!" -ForegroundColor Red
        exit 1
    }
    
    Copy-Item -Path "dist\assets\*" -Destination "assets\" -Force
    Write-Host "OK: Moved $($distAssetsFiles.Count) files to assets/" -ForegroundColor Green
    
    foreach ($file in $distAssetsFiles) {
        Write-Host "  -> $($file.Name)" -ForegroundColor Gray
    }
} else {
    [System.IO.File]::WriteAllText("index.html", $backupContent, $utf8NoBom)
    Write-Host "ERROR: dist/assets/ folder does not exist! Build may have failed." -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 5: Update root index.html with new filenames from dist/index.html
Write-Host "[5/6] Updating root index.html with new filenames..." -ForegroundColor Yellow

# Read the built index.html from dist to get the correct asset references
$distIndexHtml = [System.IO.File]::ReadAllText("dist\index.html", [System.Text.Encoding]::UTF8)

# Extract JS and CSS filenames from dist/index.html using regex
$jsPattern = 'src="\./assets/([^"]+\.js)"'
$cssPattern = 'href="\./assets/([^"]+\.css)"'

$jsMatch = [regex]::Match($distIndexHtml, $jsPattern)
$cssMatch = [regex]::Match($distIndexHtml, $cssPattern)

if ($jsMatch.Success -and $cssMatch.Success) {
    $latestJsFile = $jsMatch.Groups[1].Value
    $latestCssFile = $cssMatch.Groups[1].Value
    
    Write-Host "  Found JS file: $latestJsFile" -ForegroundColor Gray
    Write-Host "  Found CSS file: $latestCssFile" -ForegroundColor Gray
    
    # Read current root index.html (which has the Vite entry point)
    $rootIndexHtml = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)
    
    # Replace the Vite dev script tag with production asset reference
    $rootIndexHtml = $rootIndexHtml -replace '<script type="module" src="/src/main\.jsx"></script>', "<script type=`"module`" crossorigin src=`"./assets/$latestJsFile`"></script>"
    
    # Add CSS link before closing </head> tag (ensure it's after the script tag)
    if ($rootIndexHtml -notmatch 'link rel="stylesheet".*href="\./assets/') {
        # Insert CSS link after the script tag
        $rootIndexHtml = $rootIndexHtml -replace "(<script type=`"module`" crossorigin src=`"\./assets/[^`"]+`"></script>)", "`$1`r`n    <link rel=`"stylesheet`" crossorigin href=`"./assets/$latestCssFile`">"
    } else {
        # Replace existing CSS link
        $rootIndexHtml = $rootIndexHtml -replace 'href="\./assets/[^"]+\.css"', "href=`"./assets/$latestCssFile`""
    }
    
    # Write back with UTF-8 encoding without BOM
    [System.IO.File]::WriteAllText("index.html", $rootIndexHtml, $utf8NoBom)
    
    Write-Host "OK: Updated index.html with new file references" -ForegroundColor Green
} else {
    [System.IO.File]::WriteAllText("index.html", $backupContent, $utf8NoBom)
    Write-Host "ERROR: Could not extract file names from dist/index.html!" -ForegroundColor Red
    Write-Host "  JS Match: $($jsMatch.Success)" -ForegroundColor Red
    Write-Host "  CSS Match: $($cssMatch.Success)" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 6: Delete dist folder
Write-Host "[6/6] Deleting dist folder..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
    Write-Host "OK: Dist folder deleted" -ForegroundColor Green
} else {
    Write-Host "  (dist folder does not exist, skipping)" -ForegroundColor Gray
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "OK: Sync process completed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan