import express from 'express'
const router = express.Router();
import { getUserProfile, getUsersExceptMe, login, logout, register } from '../controllers/user.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js'

router.post('/register', register);
router.post('/login', login);
router.post('/logut', logout);
router.get('/profile', isAuthenticatedUser, getUserProfile);
router.get('/get-users-except-me', isAuthenticatedUser, getUsersExceptMe);

export default router;