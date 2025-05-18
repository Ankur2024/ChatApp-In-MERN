import { Router } from 'express';
const router = Router();
import { handleLogin, handleSignup, handleLogout } from "../controller/auth.controller.js"

router.post('/login', handleLogin);
router.post('/signup', handleSignup);
router.post('/logout', handleLogout);

export default router;
