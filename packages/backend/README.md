# Backend Package

Express.js backend with TypeScript, Swagger documentation, and hot reload.

## Features

- ✅ Express.js with TypeScript
- ✅ Swagger/OpenAPI documentation
- ✅ Hot reload with Nodemon
- ✅ Security middleware (Helmet, CORS)
- ✅ Rate limiting
- ✅ Error handling
- ✅ Request logging

## Development

### Start Development Server

```bash
npm run dev
```

The server will automatically restart when you make changes to files in the `src` directory.

### API Documentation

Once the server is running, access the interactive API documentation at:

**http://localhost:3001/api-docs**

The documentation is automatically generated from Swagger annotations in your route files.

## Adding API Documentation

Document your endpoints by adding Swagger annotations above your route handlers:

```typescript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/users', getUsersController);
```

## Project Structure

```
src/
├── config/          # Configuration files (swagger, app config)
├── middleware/      # Express middleware
├── routes/          # API routes with Swagger documentation
├── controllers/     # Route controllers
├── services/        # Business logic
├── utils/           # Utility functions
└── index.ts         # Entry point
```

## Environment Variables

See `.env.example` for required environment variables.

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run lint` - Lint TypeScript files
- `npm run type-check` - Type check without emitting files
