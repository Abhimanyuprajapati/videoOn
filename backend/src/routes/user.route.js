import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { getFriendsList, getRecommendedUsers } from '../controllers/user.controller.js';

const router = express.Router();

// apply all routes 
router.use(protectedRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getFriendsList);

export default router;