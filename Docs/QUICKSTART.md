# Quick Start Guide

Get up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm 9+ installed

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
# Backend
cp packages/backend/.env.example packages/backend/.env

# Frontend
cp packages/frontend/.env.example packages/frontend/.env
```

Edit the `.env` files if needed (defaults should work for local development).

### 3. Start Development Servers

```bash
npm run dev
```

This starts:

- **Backend**: http://localhost:3001
- **Frontend**: http://localhost:3000

### 4. Verify Installation

- Open http://localhost:3000 in your browser
- Check backend health: http://localhost:3001/health
- Test API: http://localhost:3001/api

## Next Steps

1. **Explore the codebase**: Check out `ARCHITECTURE.md` for structure details
2. **Add your features**: Start building in `packages/backend/src` and `packages/frontend/src`
3. **Read the docs**: See `README.md` for comprehensive documentation

## Common Commands

```bash
# Development
npm run dev              # Start both servers
npm run build           # Build all packages
npm run lint            # Lint all code
npm run type-check      # Type check all code

# Individual packages
npm run dev --workspace=backend
npm run dev --workspace=frontend
```

## Troubleshooting

### Port Already in Use

Change ports in `.env` files:

- Backend: `PORT=3001` → `PORT=3002`
- Frontend: Next.js will prompt or use `-p 3001`

### Module Not Found

Run `npm install` again to ensure all workspace dependencies are installed.

### Type Errors

Run `npm run type-check` to see detailed TypeScript errors.

## Need Help?

Check the main `README.md` for detailed documentation!
