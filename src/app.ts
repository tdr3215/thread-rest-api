import express from 'express';
import { config } from 'dotenv';
import { allRoutes } from './routes';
// Config
config();
const app = express();
const port: string | number = process.env.PORT || 3000;
// Middleware

app.use('/api', allRoutes);

// Initialize App
app.listen(port, () => {
  console.log(`listening on port:${port}`);
});

// Destructuring Hints
// app.get('/:id', ({ params, query }, res) => {
//   const { id } = params;

//   // ? Destructuring query params from res.query object
//   const { name, age, favoriteColor } = query;
//   res.send(
//     `Hello human #${id}. Your name will be ${name}. Your age will be ${age} and your favorite color is: ${favoriteColor}`
//   );
// });
