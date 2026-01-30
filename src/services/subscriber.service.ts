import { Subscriber } from '../models/subscriber.model';
import { SubscribeInput } from '../validators/subscriber.validator';

export class SubscriberService {
  async subscribe(data: SubscribeInput): Promise<{ email: string }> {
    const existingSubscriber = await Subscriber.findOne({ email: data.email });

    if (existingSubscriber) {
      throw new Error('Email already subscribed');
    }

    const subscriber = await Subscriber.create({
      email: data.email,
    });

    return {
      email: subscriber.email,
    };
  }
}

export const subscriberService = new SubscriberService();
