import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getFriends, getRecommendedUsers, sendFriendRequest, acceptFriendRequest, getFriendRequest, getOutgoingFriendReqs } from "../controller/user.controller.js";

const router = express.Router();

//apply auth middleware to all route
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends",  getFriends);
router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);
router.get("/friend-requests", getFriendRequest);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);


export default router;