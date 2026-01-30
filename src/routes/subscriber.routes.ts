import { Router } from 'express';
import { subscriberController } from '../controllers/subscriber.controller';
import { validate } from '../middlewares/validate.middleware';
import { subscribeSchema } from '../validators/subscriber.validator';

const router = Router();

router.post('/subscribe', validate(subscribeSchema), (req, res, next) =>
  subscriberController.subscribe(req, res, next)
);

export default router;
