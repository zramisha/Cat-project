import express from "express";
import {
    getUserById
} from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

// complex user operations
router.get("/:id", protect, getUserById); 


export default router;