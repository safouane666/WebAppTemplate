import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import { rateLimiter } from './middleware/rateLimiter';
import { config } from './config';
import { swaggerSpec } from './config/swagger';
import { healthRoutes } from './routes/health';
import { apiRoutes } from './routes/api';

// Load environment variables
dotenv.config();

const app: Express = express();

// Trust proxy (important for rate limiting behind reverse proxy)
app.set('trust proxy', 1);

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: config.cors.origin,
    credentials: true,
  })
);

// Compression middleware
app.use(compression());

// Rate limiting
app.use('/api', rateLimiter);

// Logging middleware
if (config.env !== 'test') {
  app.use(morgan(config.env === 'production' ? 'combined' : 'dev'));
}

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Swagger documentation (only in development)
if (config.env !== 'production') {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'WebApp Template API Documentation',
    })
  );
}

// Health check route (before API routes)
app.use('/health', healthRoutes);

// API routes
app.use('/api', apiRoutes);

// 404 handler
app.use(notFoundHandler);

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = config.port || 3001;

// Start server (this file is the entry point)
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📦 Environment: ${config.env}`);
  console.log(`🌐 API: http://localhost:${PORT}/api`);
  if (config.env !== 'production') {
    console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
  }
});

export default app;
