import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.status(200).send('HI!');
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
    res.status(200).send('HI!');
  } catch (error) {
    console.log(error);
  }
});

export default router;
