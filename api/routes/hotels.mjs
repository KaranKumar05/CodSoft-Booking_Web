import express from 'express';
import {
    countByCity,
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
///----- GET -----///
router.get('/find/:id', getHotel);
///----- GET ALL -----///
router.get('/', getAllHotels);

///----- GET ALL BY CITY OR TYPE  -----///
router.get('/countByCity', countByCity);
// router.get('/countByType', getAllHotels);





export default router;