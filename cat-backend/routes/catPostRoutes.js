import express from "express";
import {
  createCatPost,
  getAllCatPosts,
  getCatPostById,
  updateCatPost,
  deleteCatPost,
  addRequestToPost,
  
} from "../controllers/catPostController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

// CRUD operations for CatPost
router.post("/", protect, createCatPost); // Create a CatPost
router.get("/", getAllCatPosts); // Get all CatPosts
router.get("/:id", getCatPostById); // Get single CatPost by ID
router.put("/:id", protect, updateCatPost); // Update CatPost
router.delete("/:id", protect, deleteCatPost); // Delete CatPost
router.patch("/:id/requests", protect, addRequestToPost); // Delete CatPost

export default router;
