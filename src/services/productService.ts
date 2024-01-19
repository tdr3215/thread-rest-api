import { Request, Response, Router } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../config/connection';
import { Product } from '../models/Product';
const getAll = async (req: Request, res: Response) => {
  // res.send('This is the products route!');
  try {
    const listOfProducts = (await collections.products
      ?.find({})
      .toArray()) as Product[];

    res.status(200).send(listOfProducts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// TODO: implement get one / figure out router.use or app.use
const getOne = async (req: Request, res: Response) => {};

export { getAll, getOne };
