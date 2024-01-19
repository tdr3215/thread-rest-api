import { ObjectId } from 'mongodb';

interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  price?: string;
  imgURL: string;
}

export { Product };
