import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { getFriendsList, getRecommendedUsers, sendFriendRequest, acceptFriendRequest } from '../controllers/user.controller.js';

const router = express.Router();

// apply all routes 
router.use(protectedRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getFriendsList);
router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);


export default router;