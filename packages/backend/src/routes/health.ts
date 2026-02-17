import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the health status of the API server including uptime, timestamp, and environment information
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is healthy and running
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthCheck'
 *             example:
 *               status: "ok"
 *               timestamp: "2024-01-01T00:00:00.000Z"
 *               uptime: 12345.67
 *               environment: "development"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

export { router as healthRoutes };
