import { Router } from 'express';
import { subscriberController } from '../controllers/subscriber.controller';
import { validate } from '../middlewares/validate.middleware';
import { subscribeSchema } from '../validators/subscriber.validator';

const router = Router();

/**
 * @swagger
 * /api/subscribe:
 *   post:
 *     summary: Subscribe with an email
 *     tags: [Subscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubscribeRequest'
 *     responses:
 *       201:
 *         description: Successfully subscribed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubscribeSuccess'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       409:
 *         description: Email already subscribed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/subscribe', validate(subscribeSchema), (req, res, next) =>
  subscriberController.subscribe(req, res, next)
);

export default router;
