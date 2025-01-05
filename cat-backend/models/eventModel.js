import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  location: { type: String },

  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
    required: true,
  },

  date: {
    type: Date,
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Event", eventSchema);
