# Architecture Documentation

## Overview

This template follows a monorepo architecture using npm workspaces, providing a scalable and maintainable structure for full-stack TypeScript applications.

## Monorepo Structure

```
webapp-template/
├── packages/
│   ├── backend/     # Express.js API server
│   ├── frontend/    # Next.js web application
│   └── shared/      # Shared code between packages
└── [root configs]   # Root-level configuration files
```

## Package Details

### Backend (`packages/backend`)

**Technology Stack:**

- Express.js - Web framework
- TypeScript - Type safety
- ESM Modules - Modern JavaScript modules

**Architecture Pattern:**

- **Routes**: Define API endpoints and mount controllers
- **Controllers**: Handle HTTP request/response logic
- **Services**: Business logic and data operations
- **Middleware**: Request processing (auth, validation, error handling)
- **Config**: Environment and application configuration
- **Utils**: Helper functions

**Key Features:**

- Security middleware (Helmet, CORS)
- Rate limiting
- Request logging (Morgan)
- Compression
- Centralized error handling
- Environment-based configuration

### Frontend (`packages/frontend`)

**Technology Stack:**

- Next.js 14 - React framework with App Router
- TypeScript - Type safety
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client
- shadcn/ui - UI component library
- React Hook Form + Zod - Form validation

**Architecture Pattern:**

- **App Router**: Next.js 14 file-based routing
  - Authentication pages (`/auth/login`, `/auth/register`)
  - Protected routes with wrapper components
- **Components**: Reusable React components
  - UI components (shadcn/ui)
  - Authentication components (forms, protected routes)
- **Contexts**: React Context API for global state
  - AuthContext for authentication state management
- **Hooks**: Custom React hooks
- **Lib**: API client and utilities
  - Axios client with interceptors
  - Auth API functions
  - Utility functions (cn helper for className merging)
- **Types**: TypeScript type definitions
  - General types
  - Auth-related types

**Key Features:**

- Server-side rendering (SSR)
- Static site generation (SSG)
- API route integration
- Optimized production builds
- Image optimization
- Authentication system with context
- Protected routes
- Form validation with react-hook-form and zod

**See `Docs/FRONTEND_STRUCTURE.md` for detailed frontend folder structure.**

### Shared (`packages/shared`)

**Purpose:**

- Shared TypeScript types between frontend and backend
- Common utility functions
- Shared constants

**Usage:**
Both frontend and backend can import from `@webapp-template/shared`:

```typescript
import { ApiResponse, formatDate } from '@webapp-template/shared';
```

## Development Workflow

### Local Development

1. **Install Dependencies**: `npm install` (installs all workspace dependencies)
2. **Start Development**: `npm run dev` (runs both backend and frontend)
3. **Individual Packages**: Use `npm run dev --workspace=<package-name>`

### Building

1. **Build All**: `npm run build` (builds all packages)
2. **Build Individual**: `npm run build --workspace=<package-name>`

### Code Quality

- **Linting**: ESLint configured per package
- **Formatting**: Prettier with consistent rules
- **Type Checking**: TypeScript strict mode
- **Git Hooks**: Husky + lint-staged for pre-commit checks

## Environment Management

### Development

- `.env` files in each package
- Hot reload enabled
- Detailed error messages
- Development-specific middleware

### Production

- Environment variables from system/env
- Optimized builds
- Error handling without stack traces
- Production-specific middleware

## Deployment Architecture

### Docker

- Multi-stage builds for optimization
- Separate Dockerfiles for backend and frontend
- Docker Compose for local development
- Production-ready images

### CI/CD

- GitHub Actions workflows
- Automated testing and linting
- Build verification
- Deployment automation (customize as needed)

## Best Practices Implemented

1. **Type Safety**: Full TypeScript coverage
2. **Code Organization**: Clear separation of concerns
3. **Error Handling**: Centralized error handling
4. **Security**: Helmet, CORS, rate limiting
5. **Performance**: Compression, optimized builds
6. **Developer Experience**: Hot reload, clear errors, good tooling
7. **Scalability**: Modular architecture, easy to extend

## Extension Points

### Adding a New API Route

1. Create route file in `packages/backend/src/routes/api/`
2. Create controller in `packages/backend/src/controllers/`
3. Create service if needed in `packages/backend/src/services/`
4. Mount route in `packages/backend/src/routes/api/index.ts`

### Adding a New Frontend Page

1. Create page in `packages/frontend/src/app/`
2. Use App Router conventions
3. Import shared types from `@webapp-template/shared`

### Adding Shared Code

1. Add to `packages/shared/src/`
2. Export from `packages/shared/src/index.ts`
3. Import in frontend/backend as needed

## Security Considerations

- Environment variables for secrets
- CORS configuration
- Rate limiting
- Input validation
- Security headers (Helmet)
- Error messages don't expose internals

## Performance Optimizations

- Compression middleware
- Next.js optimizations (image, font, etc.)
- Production builds optimized
- Docker multi-stage builds
- Code splitting (Next.js automatic)
