import express from 'express'
const router = express.Router();
import { getOtherUsers, getUserProfile, login, logout, register } from '../controllers/user.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js'

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', isAuthenticatedUser, getUserProfile);
router.get('/get-other-users', isAuthenticatedUser, getOtherUsers);

export default router;