import { Router } from 'express';
import subscriberRoutes from './subscriber.routes';

const router = Router();

router.use('/', subscriberRoutes);

export default router;
