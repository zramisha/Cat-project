import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import authRoutes from "./authRoutes.js";
import catRoutes from "./catRoutes.js"


const router = express.Router();

const path = "/api/v1/";

router.use(`${path}auth`, authRoutes);
router.use(`${path}cats`, catRoutes);

export default router;