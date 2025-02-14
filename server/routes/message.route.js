import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/send/:receiverId', isAuthenticatedUser, sendMessage);
router.get('/get-messages/:receiverId', isAuthenticatedUser, getMessages);
  
export default router;