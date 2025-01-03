import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  description: { type: String },
  image: { type: String }, // URL to the cat's image
  healthStatus: {
    vaccinated: { type: Boolean, default: false },
    weight: { type: Number, default: null }, // Weight in kg
    notes: { type: String, default: "" }, // Additional health notes
    overall: {
      type: String,
      enum: ["healthy", "sick", "injured", "under treatment"],
      default: "healthy",
    },
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Who added the cat
}, { timestamps: true });

export default mongoose.model("Cat", catSchema);
