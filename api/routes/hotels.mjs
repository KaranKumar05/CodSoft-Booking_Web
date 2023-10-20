import express from 'express';
import {
    createHotel,
    deleteHotel,
    getAllHotels,
    getHotel,
    updateHotel
} from '../controllers/hotelController.mjs';
import { verifyAdmin } from '../utils/verifyToken.mjs';

let router = express.Router();


///----- CREATE -----///
router.post('/', verifyAdmin, createHotel);
///----- UPDATE -----///
router.put('/:id', verifyAdmin, updateHotel);
///----- DELETE -----///
router.delete('/:id', verifyAdmin, deleteHotel);
///----- GET ALL -----///
router.get('/', getAllHotels);
///----- GET -----///
router.get('/:id', getHotel);





export default router;