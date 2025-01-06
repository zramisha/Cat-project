import express from "express";
import {
    addToWishlist,
    getUserById,
    getUserCats,
} from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

// complex user operations
router.get("/:id", protect, getUserById); 
router.patch("/wishlist", protect, addToWishlist); 
router.get("/:userid/cats", getUserCats); 


export default router;