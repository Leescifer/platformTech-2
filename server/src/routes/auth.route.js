import express from 'express';
import {
    authController,
    loginController
} from '../controller/auth.controller.js';

const router = express.Router();

router.get('/register', authController);
router.get('/login', loginController);

export default router;