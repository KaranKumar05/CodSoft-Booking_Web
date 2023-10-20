import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.mjs';
import {
    createRoom,
    deleteRoom,
    getAllRooms,
    getRoom,
    updateRoom
} from '../controllers/roomController.mjs';

let router = express.Router();


///----- CREATE -----///
router.post('/:hotelid', verifyAdmin, createRoom);
///----- UPDATE -----///
router.put('/:id', verifyAdmin, updateRoom);
///----- DELETE -----///
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
///----- GET ALL -----///
router.get('/', getAllRooms);
///----- GET -----///
router.get('/:id', getRoom);




export default router;