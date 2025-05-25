import { Router } from 'express';
const router = Router();
import { handleLogin, handleSignup, handleLogout, handleOnBoarding } from "../controller/auth.controller.js"
import { protectRoute } from '../middleware/auth.middleware.js';

router.post('/login', handleLogin);
router.post('/signup', handleSignup);
router.post('/logout', handleLogout);
router.post("/onboarding",protectRoute, handleOnBoarding);

// Check if user logged in or not
router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ success: true, user: req.user });
})
export default router;
