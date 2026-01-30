import mongoose, { Schema } from 'mongoose';
import { ISubscriber } from '../types/subscriber.types';

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

subscriberSchema.index({ email: 1 });

export const Subscriber = mongoose.model<ISubscriber>('Subscriber', subscriberSchema);
