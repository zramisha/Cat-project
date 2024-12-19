import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  description: { type: String },
  image: { type: String }, // URL to the cat's image
  shelterOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['available', 'adopted'], default: 'available' },
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Cat", catSchema);