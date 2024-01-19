import { Request, Response } from 'express';

const getAllProducts = (req: Request, res: Response) => {
  res.send('This is the products route!');
};

export { getAllProducts };
