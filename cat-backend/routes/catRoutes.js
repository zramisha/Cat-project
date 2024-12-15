import express from "express";
import { createCatProfile } from "../controllers/catControllers/create.js";
import { getAll } from "../controllers/catControllers/getAll.js";
import { getById } from "../controllers/catControllers/getById.js";



// router object ..//
const router = express.Router();


//routes ....
router.post('/create', createCatProfile);
router.get('/:id', getById);
router.get('/', getAll)



export default router;