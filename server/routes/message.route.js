import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/send/:recieverId', isAuthenticatedUser, sendMessage);
router.get('/get-messages/:recieverId', isAuthenticatedUser, getMessages);
  
export default router;