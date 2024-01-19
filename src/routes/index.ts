import { Router } from 'express';
import { getAllProducts } from './productRoutes';
const router = Router();

router.route('/products').get(getAllProducts);

export { router as allRoutes };
