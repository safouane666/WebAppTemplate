# Setup script for WebApp Template (PowerShell)

Write-Host "🚀 Setting up WebApp Template..." -ForegroundColor Cyan

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Set up environment files
Write-Host "⚙️  Setting up environment files..." -ForegroundColor Yellow

if (-not (Test-Path "packages/backend/.env")) {
    Copy-Item "packages/backend/.env.example" "packages/backend/.env"
    Write-Host "✅ Created packages/backend/.env" -ForegroundColor Green
}

if (-not (Test-Path "packages/frontend/.env")) {
    Copy-Item "packages/frontend/.env.example" "packages/frontend/.env"
    Write-Host "✅ Created packages/frontend/.env" -ForegroundColor Green
}

if (-not (Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "✅ Created .env" -ForegroundColor Green
}

# Initialize Husky
Write-Host "🐕 Setting up Husky..." -ForegroundColor Yellow
npx husky install

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Review and update .env files if needed"
Write-Host "  2. Run 'npm run dev' to start development servers"
Write-Host "  3. Open http://localhost:3000 in your browser"
