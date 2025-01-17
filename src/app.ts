
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Shopify app!');
});



export default app;