import express from 'express';
import { login, register } from '../controllers/authController.mjs';

let router = express.Router();
///----- Sign Up -----///
router.post('/register', register);
///----- Login -----///
router.post('/login', login);

export default router;