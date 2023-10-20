import express from 'express';

let router = express.Router();
///----- Routers -----///
import authRouter from './routes/auth.mjs'
import hotelsRouter from './routes/hotels.mjs'
import usersRouter from './routes/users.mjs'
import roomsRouter from './routes/rooms.mjs'

router.use('/auth', authRouter); //{baseUrl}/auth
router.use('/hotels',hotelsRouter)//{baseUrl}/hotels
router.use('/users',usersRouter)//{baseUrl}/users
router.use('/rooms',roomsRouter)//{baseUrl}/rooms

export default router;