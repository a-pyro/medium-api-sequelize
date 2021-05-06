import { Router } from 'express';
import { Author } from '../db/index.js';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).send(author);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

export default router;
