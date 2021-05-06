import express from 'express';
import cors from 'cors';
import articlesRouter from './services/articles.js';
import authorsRouter from './services/authors.js';
import categoriesRouter from './services/categories.js';
import reviewsRouter from './services/reviews.js';
import { db } from './db/index.js';

const server = express();

server.use(cors());
server.use(express.json());

server.use('/articles', articlesRouter);
server.use('/authors', authorsRouter);
server.use('/reviews', reviewsRouter);
server.use('/categories', categoriesRouter);

db.sync().then(() => {
  server.listen(process.env.PORT || 3002, () => {
    console.log('server is running on port ', process.env.PORT || 3002);
  });
});
