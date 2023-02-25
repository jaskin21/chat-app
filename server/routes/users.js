import express from 'express';
import { userProfile } from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/me', authMiddleware, userProfile);

export default router;
