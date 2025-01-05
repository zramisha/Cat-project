import express from "express";
import { createShelter } from "../controllers/shelterControllers/createShelter.js";
import { getAllShelters } from "../controllers/shelterControllers/getAllShelters.js";
import { getShelterById } from "../controllers/shelterControllers/getShelterById.js";
import { updateShelter } from "../controllers/shelterControllers/updateShelter.js";
import { deleteShelter } from "../controllers/shelterControllers/deleteShelter.js";
import authMiddleware from "../middlewares/authMiddleware.js";



// router object ..//
const router = express.Router();


//routes ....
router.post('/create', authMiddleware, createShelter);
router.get('/:id', getShelterById);
router.patch('/:id', authMiddleware, updateShelter);
router.delete('/:id', authMiddleware, deleteShelter);
router.get('/', getAllShelters)


export default router;