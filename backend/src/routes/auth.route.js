import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// define route here 
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/onboarding",protectedRoute, onboard);


export default router;  