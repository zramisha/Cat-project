import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },

  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
    required: true,
  },

  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },

  status: {
    type: String,
    enum: ["Active", "Cancelled", "Completed"],
    default: "Active",
  },

  capacity: { type: Number },

  interested: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  going: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  rsvpDeadline: { type: Date },

  images: [String], // Array of URLs to images
});

export default mongoose.model("Event", eventSchema);
