import express from 'express';
import cors from 'cors';
import signRouter from './signup.js';
import logRouter from './login.js';
import friendsRouter from './friends.js';

const router = express.Router();
router.use(express.json());

router.use('/root', signRouter);
router.use('/root', logRouter);
router.use('/root', friendsRouter);

export default router;