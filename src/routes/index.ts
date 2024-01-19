import { Router } from 'express';
import express from 'express';
import { getAllProducts } from './productRoutes';
const router = Router();

router.use(express.json());
router.route('/products').get(getAllProducts);

export { router as allRoutes };
