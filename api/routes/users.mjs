import express from 'express';
import { updateUser, deleteUser, getUser, getAllUsers } from '../controllers/userController.mjs';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.mjs';

let router = express.Router();

// router.get('/checkAuth', verifyToken, (req, res, next) => {
//     res.send(" You are logged in")
// })
// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//     res.send(" You are logged in and delete your account")
// })
// router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
//     res.send(" Hello, Admin You are logged in and delete any account")
// })

///----- UPDATE -----///
router.put('/:id', verifyUser, updateUser);
///----- DELETE -----///
router.delete('/:id', verifyUser, deleteUser);
///----- GET ALL -----///
router.get('/', verifyAdmin, getAllUsers);
///----- GET -----///
router.get('/:id', verifyUser, getUser);



export default router;