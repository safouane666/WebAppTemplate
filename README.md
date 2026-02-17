# WebApp Template

Ultimate TypeScript web application template with Express.js backend and Next.js frontend. Built with modern best practices, production-ready architecture, and deployment configurations.

## 🚀 Features

- **Monorepo Architecture**: Organized with npm workspaces for better code sharing
- **TypeScript**: Full TypeScript support across all packages
- **Backend**: Express.js with TypeScript, middleware, error handling, and security best practices
- **API Documentation**: Swagger/OpenAPI documentation with interactive UI
- **Frontend**: Next.js 14 with App Router, Tailwind CSS, and modern React patterns
- **Shared Package**: Common types, utilities, and constants shared between frontend and backend
- **Development Tools**: ESLint, Prettier, Husky, lint-staged, and Nodemon for hot reload
- **Docker Support**: Multi-stage Dockerfiles for optimized production builds
- **CI/CD**: GitHub Actions workflows for automated testing and deployment
- **Environment Management**: Proper dev/prod separation with environment variables

## 📁 Project Structure

```
webapp-template/
├── packages/
│   ├── backend/          # Express.js backend
│   │   ├── src/
│   │   │   ├── config/    # Configuration files
│   │   │   ├── middleware/ # Express middleware
│   │   │   ├── routes/    # API routes
│   │   │   ├── controllers/ # Route controllers
│   │   │   ├── services/  # Business logic
│   │   │   ├── utils/     # Utility functions
│   │   │   └── index.ts   # Entry point
│   │   └── package.json
│   │
│   ├── frontend/          # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/       # Next.js App Router pages
│   │   │   ├── components/ # React components
│   │   │   ├── lib/       # Utilities and API client
│   │   │   ├── hooks/     # React hooks
│   │   │   └── types/     # TypeScript types
│   │   └── package.json
│   │
│   └── shared/            # Shared code between packages
│       ├── src/
│       │   ├── types/     # Shared TypeScript types
│       │   ├── utils/     # Shared utilities
│       │   └── constants/ # Shared constants
│       └── package.json
│
├── .github/
│   └── workflows/         # CI/CD workflows
├── Dockerfile             # Multi-stage Dockerfile
├── docker-compose.yml     # Docker Compose configuration
└── package.json           # Root package.json with workspaces
```

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd WebAppTemplate
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Copy example environment files
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
cp .env.example .env
```

4. Update environment variables in `.env` files with your configuration.

### Development

Run both backend and frontend in development mode:

```bash
npm run dev
```

This will start:

- Backend server on `http://localhost:3001`
- Frontend server on `http://localhost:3000`
- API Documentation on `http://localhost:3001/api-docs` (development only)

Run individual packages:

```bash
# Backend only
npm run dev --workspace=backend

# Frontend only
npm run dev --workspace=frontend
```

### Building

Build all packages:

```bash
npm run build
```

Build individual packages:

```bash
npm run build --workspace=backend
npm run build --workspace=frontend
npm run build --workspace=shared
```

### Production

Start production servers:

```bash
npm run build
npm start
```

## 🐳 Docker

### Using Docker Compose

Build and run all services:

```bash
docker-compose up --build
```

Run in detached mode:

```bash
docker-compose up -d
```

Stop services:

```bash
docker-compose down
```

### Individual Docker Images

Build backend:

```bash
docker build -f Dockerfile.backend -t webapp-backend .
```

Build frontend:

```bash
docker build -f Dockerfile.frontend -t webapp-frontend .
```

## 📝 Available Scripts

### Root Level

- `npm run dev` - Start both backend and frontend in development mode
- `npm run build` - Build all packages
- `npm run start` - Start all packages in production mode
- `npm run lint` - Lint all packages
- `npm run type-check` - Type check all packages
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean all build artifacts

### Backend (`packages/backend`)

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run start:prod` - Start production server with NODE_ENV=production
- `npm run lint` - Lint TypeScript files
- `npm run type-check` - Type check without emitting files

### Frontend (`packages/frontend`)

- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js application
- `npm run start` - Start Next.js production server
- `npm run lint` - Lint Next.js application

## 🔧 Configuration

### Environment Variables

#### Backend (`packages/backend/.env`)

```env
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

#### Frontend (`packages/frontend/.env`)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=development
```

### TypeScript Configuration

Each package has its own `tsconfig.json` that extends the root configuration. Path aliases are configured for cleaner imports.

### ESLint & Prettier

- ESLint configurations are in each package's `.eslintrc.json`
- Prettier configuration is in root `.prettierrc.json`
- Code is automatically formatted on commit (via Husky + lint-staged)

### API Documentation (Swagger)

The backend includes Swagger/OpenAPI documentation that is automatically generated from JSDoc comments in route files.

- **Access**: `http://localhost:3001/api-docs` (development only)
- **Documentation**: Add Swagger annotations directly in route files using JSDoc comments
- **Example**: See `packages/backend/src/routes/health.ts` for an example

To document a new endpoint, add Swagger annotations above your route handler:

```typescript
/**
 * @swagger
 * /api/your-endpoint:
 *   get:
 *     summary: Your endpoint summary
 *     description: Detailed description
 *     tags: [API]
 *     responses:
 *       200:
 *         description: Success response
 */
router.get('/your-endpoint', handler);
```

## 🏗️ Architecture

### Backend Architecture

- **Routes**: Define API endpoints with Swagger documentation
- **Controllers**: Handle request/response logic
- **Services**: Business logic and data operations
- **Middleware**: Request processing (auth, validation, error handling)
- **Config**: Environment and application configuration
- **Hot Reload**: Nodemon automatically restarts server on file changes

### Frontend Architecture

- **App Router**: Next.js 14 App Router for routing
- **Components**: Reusable React components
- **Hooks**: Custom React hooks
- **Lib**: API client and utilities
- **Types**: TypeScript type definitions

### Shared Package

The shared package contains code that can be used by both frontend and backend:

- Type definitions
- Utility functions
- Constants

## 🚢 Deployment

### Docker Deployment

1. Build Docker images:

```bash
docker-compose build
```

2. Run containers:

```bash
docker-compose up -d
```

### Manual Deployment

1. Build all packages:

```bash
npm run build
```

2. Set production environment variables

3. Start services:

```bash
npm start
```

### CI/CD

GitHub Actions workflows are configured for:

- **CI**: Automated linting, type checking, and building on push/PR
- **Deploy**: Deployment workflow (customize for your platform)

## 🔒 Security Best Practices

- Helmet.js for security headers
- CORS configuration
- Rate limiting
- Input validation (express-validator, Zod)
- Environment variable management
- Error handling without exposing internals

## 📚 Best Practices

- **Type Safety**: Full TypeScript coverage
- **Code Quality**: ESLint + Prettier + Husky
- **Modularity**: Clear separation of concerns
- **Error Handling**: Centralized error handling middleware
- **Logging**: Morgan for HTTP request logging
- **Performance**: Compression middleware, optimized builds

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checking: `npm run lint && npm run type-check`
4. Commit your changes (Husky will run pre-commit hooks)
5. Push and create a pull request

## 📄 License

MIT License - feel free to use this template for your projects!

## 🆘 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using TypeScript, Express.js, and Next.js
