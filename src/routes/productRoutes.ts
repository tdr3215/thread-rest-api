import { Router } from 'express';
import { getAll, getOne } from '../services/productService';
const router = Router();
const getAllProducts = router.use('/', getAll);
const getOneProduct = router.use('/:id', getOne);

export { getAllProducts, getOneProduct };
