# WebApp Template

[![Template](https://img.shields.io/badge/GitHub-Template-blue)](https://github.com/safouane666/WebAppTemplate/generate)

> **A production-ready TypeScript web application template** with Express.js backend and Next.js frontend. Built with modern best practices, production-ready architecture, and deployment configurations.

**Made by [SAFOUANE REGAIEG](https://github.com/safouane666)**

This is a **GitHub template repository** - click the **"Use this template"** button above or visit the repository to create your own project based on this template.

## 🚀 Features

- **Monorepo Architecture**: Organized with npm workspaces for better code sharing
- **TypeScript**: Full TypeScript support across all packages
- **Backend**: Express.js with TypeScript, middleware, error handling, and security best practices
- **API Documentation**: Swagger/OpenAPI documentation with interactive UI
- **Database Support**: Optional configurations for PostgreSQL, MongoDB, and Redis (can be enabled or ignored)
- **Frontend**: Next.js 14 with App Router, Tailwind CSS, shadcn/ui components, and authentication system
- **SEO**: Dynamic sitemap.xml and robots.txt for search engines
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
│   │   │   │   ├── index.ts        # Main app configuration
│   │   │   │   ├── swagger.ts      # Swagger/OpenAPI config
│   │   │   │   ├── database.ts     # Database config (PostgreSQL, MongoDB, Redis)
│   │   │   │   └── database/       # Database connection placeholders (optional)
│   │   │   │       ├── postgres.ts # PostgreSQL connection setup
│   │   │   │       ├── mongodb.ts  # MongoDB connection setup
│   │   │   │       └── redis.ts    # Redis connection setup
│   │   │   ├── middleware/ # Express middleware
│   │   │   ├── routes/    # API routes with Swagger docs
│   │   │   ├── controllers/ # Route controllers
│   │   │   ├── services/  # Business logic
│   │   │   ├── utils/     # Utility functions
│   │   │   └── index.ts   # Entry point
│   │   └── package.json
│   │
│   ├── frontend/          # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/       # Next.js App Router pages
│   │   │   │   ├── auth/  # Authentication pages (login, register)
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── globals.css
│   │   │   ├── components/ # React components
│   │   │   │   ├── ui/    # shadcn/ui components
│   │   │   │   └── auth/  # Authentication components
│   │   │   ├── contexts/  # React contexts (AuthContext)
│   │   │   ├── hooks/     # Custom React hooks
│   │   │   ├── lib/       # Utilities and API client
│   │   │   │   ├── api.ts
│   │   │   │   ├── utils.ts
│   │   │   │   └── auth/  # Auth API functions
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
├── scripts/               # Setup scripts
│   ├── setup.sh          # Linux/macOS setup script
│   └── setup.ps1         # Windows PowerShell setup script
├── Dockerfile             # Multi-stage Dockerfile
├── docker-compose.yml     # Docker Compose configuration
└── package.json           # Root package.json with workspaces
```

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Quick Setup (Recommended)

Use the automated setup script for the fastest setup:

**Linux/macOS:**

```bash
git clone <your-repo-url>
cd WebAppTemplate
chmod +x scripts/setup.sh
./scripts/setup.sh
```

**Windows (PowerShell):**

```bash
git clone <your-repo-url>
cd WebAppTemplate
.\scripts\setup.ps1
```

The setup script will:

- ✅ Install all dependencies (root and workspace packages)
- ✅ Create `.env` files from `.env.example` templates (only if they don't exist)
- ✅ Initialize Husky Git hooks
- ✅ Display next steps

### Manual Setup

If you prefer to set up manually:

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd WebAppTemplate
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

```bash
# Copy example environment files
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
cp .env.example .env
```

4. **Initialize Husky (for Git hooks):**

```bash
npx husky install
```

5. **Update environment variables** in `.env` files with your configuration (optional - defaults work for local development).

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

#### Database Services (Optional)

The `docker-compose.yml` file includes **commented-out** database services that are production-ready:

- **PostgreSQL** - Production-ready PostgreSQL 16 with data persistence
- **MongoDB** - MongoDB 7 with authentication and data persistence
- **Redis** - Redis 7 with optional password protection and persistence

**To enable databases:**

1. **Uncomment the database service(s)** you want in `docker-compose.yml`
2. **Uncomment the corresponding volume(s)** at the bottom of the file
3. **Update your `.env` file** with database connection details:

   ```env
   # PostgreSQL
   POSTGRES_HOST=postgres
   POSTGRES_PORT=5432
   POSTGRES_DB=webapp_db
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=your_secure_password

   # MongoDB
   MONGO_HOST=mongodb
   MONGO_PORT=27017
   MONGO_DB=webapp_db
   MONGO_USER=admin
   MONGO_PASSWORD=your_secure_password
   MONGO_AUTH_SOURCE=admin

   # Redis
   REDIS_HOST=redis
   REDIS_PORT=6379
   REDIS_PASSWORD=your_secure_password
   ```

4. **Uncomment the `depends_on`** section in the backend service
5. **Restart services:**
   ```bash
   docker-compose down
   docker-compose up -d
   ```

**Note:** Database services include:

- ✅ Health checks for reliability
- ✅ Data persistence with Docker volumes
- ✅ Production-ready configurations
- ✅ Network isolation
- ✅ Automatic restart policies

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
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

- **NEXT_PUBLIC_APP_URL**: Your app’s public URL. Used for **sitemap.xml** and **robots.txt**. Set to your production URL (e.g. `https://yourdomain.com`) in production.

#### Database Configuration (Optional)

The template includes **optional** database configurations for PostgreSQL, MongoDB, and Redis. You can use one, all, or none - they're completely optional.

**PostgreSQL:**

```env
# Option 1: Connection string
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Option 2: Individual parameters
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=webapp_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_SSL=false
```

**MongoDB:**

```env
# Option 1: Connection string
MONGODB_URI=mongodb://user:password@localhost:27017/webapp_db?authSource=admin

# Option 2: Individual parameters
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB=webapp_db
MONGO_USER=your_user
MONGO_PASSWORD=your_password
MONGO_AUTH_SOURCE=admin
```

**Redis:**

```env
# Option 1: Connection string
REDIS_URL=redis://:password@localhost:6379/0

# Option 2: Individual parameters
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
```

**Using Databases:**

1. **Install the required package:**

   ```bash
   # For PostgreSQL
   npm install pg
   npm install --save-dev @types/pg

   # For MongoDB (using mongoose)
   npm install mongoose

   # For Redis
   npm install redis
   # or
   npm install ioredis
   ```

2. **Uncomment the connection code** in the respective file:
   - `packages/backend/src/config/database/postgres.ts` for PostgreSQL
   - `packages/backend/src/config/database/mongodb.ts` for MongoDB
   - `packages/backend/src/config/database/redis.ts` for Redis

3. **Import and use** in your code:

   ```typescript
   // PostgreSQL example
   import { createPostgresConnection } from '@/config/database/postgres';
   const client = await createPostgresConnection();

   // MongoDB example
   import { connectMongoDB } from '@/config/database/mongodb';
   await connectMongoDB();

   // Redis example
   import { getRedisClient } from '@/config/database/redis';
   const client = await getRedisClient();
   ```

**Note:** If you don't need databases, simply leave the environment variables commented and ignore the database configuration files. The application will work perfectly without them.

### SEO: Sitemap & Robots

The frontend generates **sitemap.xml** and **robots.txt** for search engines using Next.js App Router metadata files.

#### What they do

| File            | URL            | Purpose                                                             |
| --------------- | -------------- | ------------------------------------------------------------------- |
| **sitemap.xml** | `/sitemap.xml` | Tells search engines which pages exist and how often they change.   |
| **robots.txt**  | `/robots.txt`  | Tells crawlers which paths they are allowed or disallowed to index. |

#### How they work

- **`src/app/sitemap.ts`** – Exports a function that returns the list of URLs. Next.js serves it at `/sitemap.xml`.
- **`src/app/robots.ts`** – Exports a function that returns rules and the sitemap URL. Next.js serves it at `/robots.txt`.

Both use **NEXT_PUBLIC_APP_URL** for the base URL (e.g. `https://yourdomain.com` in production). If unset, they fall back to `http://localhost:3000`.

#### What you need to do

1. **Set the app URL in production**  
   In your frontend `.env` (or hosting env vars), set:

   ```env
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

   This ensures sitemap and robots use your real domain.

2. **When you add new public pages**  
   Edit `packages/frontend/src/app/sitemap.ts` and add an entry, for example:

   ```ts
   {
     url: `${baseUrl}/your-new-page`,
     lastModified: new Date(),
     changeFrequency: 'weekly', // 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
     priority: 0.8,            // 0.0 to 1.0
   },
   ```

3. **If you have private or admin routes**  
   Edit `packages/frontend/src/app/robots.ts` and add paths to `disallow`, for example:
   ```ts
   disallow: ['/api/', '/admin/', '/dashboard/'],
   ```

#### Verifying

- Local: `http://localhost:3000/sitemap.xml` and `http://localhost:3000/robots.txt`
- Production: `https://yourdomain.com/sitemap.xml` and `https://yourdomain.com/robots.txt`

Submit your sitemap in [Google Search Console](https://search.google.com/search-console) (Sitemaps section) after deployment.

### TypeScript Configuration

Each package has its own `tsconfig.json` that extends the root configuration. Path aliases are configured for cleaner imports.

### ESLint & Prettier

- ESLint configurations are in each package's `.eslintrc.json`
- Prettier configuration is in root `.prettierrc.json`
- Code is automatically formatted on commit (via Husky + lint-staged)

### API Documentation (Swagger/OpenAPI)

The backend includes **interactive Swagger/OpenAPI documentation** that is automatically generated from JSDoc comments in your route files. This provides a beautiful, interactive UI to explore and test your API endpoints.

#### Accessing the Documentation

Once your backend server is running in development mode:

- **Swagger UI**: `http://localhost:3001/api-docs`
- **Available only in development** (disabled in production for security)

#### How It Works

1. **Automatic Generation**: Swagger scans your route files (`packages/backend/src/routes/**/*.ts`) for JSDoc comments with `@swagger` annotations
2. **Interactive UI**: The Swagger UI provides:
   - Complete API endpoint listing
   - Request/response schemas
   - Try-it-out functionality (test endpoints directly from the browser)
   - Authentication support (if configured)
   - Example requests and responses

#### Documenting Your Endpoints

Add Swagger annotations directly above your route handlers using JSDoc comments. Here's a complete example:

```typescript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieves a list of all users in the system
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response with user list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/users', getUsersController);
```

#### Example Implementation

See `packages/backend/src/routes/health.ts` for a real-world example with:

- Endpoint documentation
- Response schemas
- Example responses
- Error handling documentation

#### Swagger Configuration

The Swagger configuration is located in `packages/backend/src/config/swagger.ts` and includes:

- API metadata (title, version, description)
- Server URLs (development and production)
- Reusable schemas (Error, HealthCheck, etc.)
- Security schemes (JWT bearer token support)
- Tags for organizing endpoints

#### Best Practices

- **Document all endpoints**: Keep your API documentation up-to-date
- **Use tags**: Organize endpoints by feature (e.g., `[Users]`, `[Auth]`, `[Products]`)
- **Define schemas**: Use `$ref` to reference reusable schemas from `swagger.ts`
- **Include examples**: Provide example requests/responses for better developer experience
- **Document errors**: Include all possible error responses (400, 401, 404, 500, etc.)

#### Adding Authentication

To document endpoints that require authentication:

```typescript
/**
 * @swagger
 * /api/protected:
 *   get:
 *     summary: Protected endpoint
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 */
```

The `bearerAuth` security scheme is already configured in `swagger.ts`.

## 🏗️ Architecture

### Backend Architecture

- **Routes**: Define API endpoints with Swagger documentation
- **Controllers**: Handle request/response logic
- **Services**: Business logic and data operations
- **Middleware**: Request processing (auth, validation, error handling)
- **Config**: Environment and application configuration
  - **Database Config**: Optional support for PostgreSQL, MongoDB, and Redis
  - **Swagger Config**: API documentation configuration
- **Hot Reload**: Nodemon automatically restarts server on file changes
- **Database Support**: Optional database connection placeholders (can be enabled or ignored)

### Frontend Architecture

- **App Router**: Next.js 14 App Router for routing
  - Authentication pages (`/auth/login`, `/auth/register`)
  - File-based routing
- **Components**: Reusable React components
  - UI components (shadcn/ui)
  - Authentication components (forms, protected routes)
- **Contexts**: React Context API for global state
  - AuthContext for authentication state management
- **Hooks**: Custom React hooks
- **Lib**: API client and utilities
  - Axios client with interceptors
  - Auth API functions
  - Utility functions
- **Types**: TypeScript type definitions
  - General types
  - Auth-related types

**See `Docs/FRONTEND_STRUCTURE.md` for detailed frontend folder structure and usage examples.**

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

## 👤 Author

**SAFOUANE REGAIEG**

- GitHub: [@safouane666](https://github.com/safouane666)

## 🆘 Support

For issues and questions, please open an issue on GitHub.

## 📝 Using This Template

This is a GitHub template repository. To create a new project based on this template:

1. Click the **"Use this template"** button on GitHub
2. Create a new repository from this template
3. Clone your new repository
4. Run the setup script (see [Getting Started](#-getting-started) above)
5. Start building your application!

---

**Made with ❤️ by SAFOUANE REGAIEG**

Built using TypeScript, Express.js, Next.js, and modern web development best practices.
