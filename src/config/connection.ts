import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();
export const collections: { products?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGO_URI!
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const productsCollection: mongoDB.Collection = db.collection(
    process.env.PRODUCTS_COLLECTION!
  );

  collections.products = productsCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${productsCollection.collectionName}`
  );
}
