import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import testRoutes from "./testRoutes.js";
import authRoutes from "./authRoutes.js";
import catRoutes from "./catRoutes.js"
import catPostRoutes from "./catPostRoutes.js";
import shelterRoutes from "./shelterRoutes.js";
import eventRoutes from "./eventRoutes.js";


const router = express.Router();

const path = "/api/v1/";

router.use(`${path}test`, authMiddleware, testRoutes); //api/v1/test/test-get
router.use(`${path}auth`, authRoutes);
router.use(`${path}cats`, catRoutes);
router.use(`${path}cat-posts`, catPostRoutes);
router.use(`${path}shelters`, shelterRoutes);
router.use(`${path}events`, eventRoutes);

export default router;