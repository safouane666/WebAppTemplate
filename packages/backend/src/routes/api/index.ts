import { Router } from 'express';
import { exampleRoutes } from './example';

const router = Router();

// Mount route modules
router.use('/example', exampleRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'API is running',
    version: '1.0.0',
    endpoints: {
      example: '/api/example',
    },
  });
});

export { router as apiRoutes };
