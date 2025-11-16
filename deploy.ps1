# 🚀 DEPLOY STACKO - QUICK START SCRIPT

Write-Host "🚀 STACKO DEPLOYMENT SCRIPT" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Change to project directory
$projectPath = "g:\c\OneDrive\Desktop\stacko\stacko-final"
Set-Location $projectPath

Write-Host "📂 Current Directory: $projectPath" -ForegroundColor Yellow
Write-Host ""

# Step 1: Clean build
Write-Host "🧹 Step 1: Cleaning previous build..." -ForegroundColor Green
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "   ✅ Cleaned dist folder" -ForegroundColor Gray
}

# Step 2: Build project
Write-Host ""
Write-Host "🔨 Step 2: Building production bundle..." -ForegroundColor Green
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "   ✅ Build successful!" -ForegroundColor Gray

# Step 3: Git status
Write-Host ""
Write-Host "📊 Step 3: Checking Git status..." -ForegroundColor Green
git status --short
Write-Host ""

# Step 4: Ask user for deployment method
Write-Host "🌐 Step 4: Choose Deployment Method:" -ForegroundColor Green
Write-Host ""
Write-Host "   1️⃣  GitHub Pages (Free, automatic)" -ForegroundColor Cyan
Write-Host "   2️⃣  Vercel (Recommended, fastest)" -ForegroundColor Cyan
Write-Host "   3️⃣  Netlify (Great alternative)" -ForegroundColor Cyan
Write-Host "   4️⃣  Just commit changes (deploy later)" -ForegroundColor Cyan
Write-Host ""

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "🐙 Deploying to GitHub Pages..." -ForegroundColor Magenta
        Write-Host ""
        
        # Commit changes
        Write-Host "   📝 Committing changes..." -ForegroundColor Yellow
        git add .
        $commitMsg = Read-Host "   Enter commit message (or press Enter for default)"
        if ([string]::IsNullOrWhiteSpace($commitMsg)) {
            $commitMsg = "Deploy: Production build $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        }
        git commit -m "$commitMsg"
        
        # Push to GitHub
        Write-Host "   📤 Pushing to GitHub..." -ForegroundColor Yellow
        git push origin main
        
        Write-Host ""
        Write-Host "   ✅ Pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "   🎉 GitHub Actions will automatically deploy your site!" -ForegroundColor Cyan
        Write-Host "   🔗 Check deployment status: https://github.com/baalaganeshr/stacko-final/actions" -ForegroundColor Cyan
        Write-Host "   🌐 Your site will be live at: https://baalaganeshr.github.io/stacko-final/" -ForegroundColor Green
    }
    
    "2" {
        Write-Host ""
        Write-Host "⚡ Deploying to Vercel..." -ForegroundColor Magenta
        Write-Host ""
        
        # Check if Vercel CLI is installed
        $vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
        if (-not $vercelInstalled) {
            Write-Host "   📦 Installing Vercel CLI..." -ForegroundColor Yellow
            npm install -g vercel
        }
        
        Write-Host "   🚀 Starting Vercel deployment..." -ForegroundColor Yellow
        Write-Host ""
        vercel --prod
        
        Write-Host ""
        Write-Host "   ✅ Deployed to Vercel!" -ForegroundColor Green
    }
    
    "3" {
        Write-Host ""
        Write-Host "🌟 Deploying to Netlify..." -ForegroundColor Magenta
        Write-Host ""
        
        # Check if Netlify CLI is installed
        $netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue
        if (-not $netlifyInstalled) {
            Write-Host "   📦 Installing Netlify CLI..." -ForegroundColor Yellow
            npm install -g netlify-cli
        }
        
        Write-Host "   🚀 Starting Netlify deployment..." -ForegroundColor Yellow
        Write-Host ""
        netlify deploy --prod
        
        Write-Host ""
        Write-Host "   ✅ Deployed to Netlify!" -ForegroundColor Green
    }
    
    "4" {
        Write-Host ""
        Write-Host "💾 Committing changes..." -ForegroundColor Magenta
        Write-Host ""
        
        git add .
        $commitMsg = Read-Host "   Enter commit message (or press Enter for default)"
        if ([string]::IsNullOrWhiteSpace($commitMsg)) {
            $commitMsg = "Update: Latest changes $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        }
        git commit -m "$commitMsg"
        
        Write-Host "   📤 Pushing to GitHub..." -ForegroundColor Yellow
        git push origin main
        
        Write-Host ""
        Write-Host "   ✅ Changes committed and pushed!" -ForegroundColor Green
        Write-Host "   ℹ️  You can deploy later using the deployment guide" -ForegroundColor Cyan
    }
    
    default {
        Write-Host ""
        Write-Host "   ❌ Invalid choice. Please run the script again." -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✅ DEPLOYMENT PROCESS COMPLETED!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 For more details, see: DEPLOY_NOW.md" -ForegroundColor Yellow
Write-Host ""
