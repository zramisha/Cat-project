import express from "express";
import {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    updateAttendance,
    deleteEvent
} from "../controllers/eventController.js";
import protect from "../middlewares/authMiddleware.js"

const router = express.Router();

// CRUD operations for event
router.post("/", protect, createEvent); // Create a event
router.get("/", getEvents); // Get all events
router.get("/:id", getEventById); // Get single event by ID
router.patch("/:id/attendance", protect, updateAttendance); 
router.patch("/:id", protect, updateEvent); 
router.delete("/:id", protect, deleteEvent); 

export default router;