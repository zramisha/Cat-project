import Event from "../models/eventModel.js";
import mongoose from "mongoose";

// Create a new event
export const createEvent = async (req, res) => {
    const { name, description, location, date, capacity, images, rsvpDeadline, hostedBy } = req.body;
    


  if (!name || !description || !location || !date) {
    return res.status(400).json({ success: false, message: "Required fields are missing" });
  }

  try {
    const newEvent = new Event({
      name,
      description,
      location,
      hostedBy,
      date,
      capacity,
      images,
      rsvpDeadline
    });

    await newEvent.save();
    res.status(201).json({ success: true, data: newEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating event: " + error.message });
  }
};

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('hostedBy', 'name description');
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get an event by ID
export const getEventById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID format" });
  }

  try {
    const event = await Event.findById(id).populate('hostedBy', 'name description');
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, description, location, date, capacity, images, rsvpDeadline } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID format" });
  }

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { name, description, location, date, capacity, images, rsvpDeadline },
      { new: true, runValidators: true }
    ).populate('hostedBy', 'name description');

    if (!updatedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, data: updatedEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating event: " + error.message });
  }
};

// Manage event attendance
export const updateAttendance = async (req, res) => {
  const { type } = req.body;
  const userId = req.user.userid
  const { id: eventId } = req.params;
    // console.log(userId);
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    return res.status(400).json({ success: false, message: "Invalid ID format" });
  }

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    // Remove the user from both lists initially
    event.interested = event.interested.filter(id => id.toString() !== userId);
    event.going = event.going.filter(id => id.toString() !== userId);

    // Add the user to the correct list
    if (type === 'interested') {
      event.interested.push(userId);
    } else if (type === 'going') {
      event.going.push(userId);
    } else {
        // remove from both
    }

    await event.save();
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID format" });
  }

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting event: " + error.message });
  }
};

export default { createEvent, getEvents, getEventById, updateEvent, updateAttendance, deleteEvent };
