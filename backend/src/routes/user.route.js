import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware';

const router = express.Router();

// apply all routes 
router.use(protectedRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getFriendsList);


export default router;