#!/bin/bash

# Setup script for WebApp Template

echo "🚀 Setting up WebApp Template..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set up environment files
echo "⚙️  Setting up environment files..."
if [ ! -f packages/backend/.env ]; then
  cp packages/backend/.env.example packages/backend/.env
  echo "✅ Created packages/backend/.env"
fi

if [ ! -f packages/frontend/.env ]; then
  cp packages/frontend/.env.example packages/frontend/.env
  echo "✅ Created packages/frontend/.env"
fi

if [ ! -f .env ]; then
  cp .env.example .env
  echo "✅ Created .env"
fi

# Initialize Husky
echo "🐕 Setting up Husky..."
npx husky install

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Review and update .env files if needed"
echo "  2. Run 'npm run dev' to start development servers"
echo "  3. Open http://localhost:3000 in your browser"
