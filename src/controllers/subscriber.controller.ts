import { Request, Response, NextFunction } from 'express';
import { subscriberService } from '../services/subscriber.service';
import { SubscribeInput } from '../validators/subscriber.validator';

export class SubscriberController {
  async subscribe(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data: SubscribeInput = req.body;
      const result = await subscriberService.subscribe(data);

      res.status(201).json({
        success: true,
        message: 'Successfully subscribed',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const subscriberController = new SubscriberController();
