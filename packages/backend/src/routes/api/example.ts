import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *     summary: Example API endpoint
 *     description: A simple example endpoint demonstrating API structure
 *     tags: [API]
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
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Example API endpoint"
 *                 data:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-01-01T00:00:00.000Z"
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Example API endpoint',
    data: {
      timestamp: new Date().toISOString(),
    },
  });
});

export { router as exampleRoutes };
