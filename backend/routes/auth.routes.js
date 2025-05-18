import { Router } from 'express';
const router = Router();
import { handleLogin, handleSignup, handleLogout } from "../controller/auth.controller.js"

router.get('/login', handleLogin);
router.get('/signup', handleSignup);
router.get('/logout', handleLogout);

export default router;
