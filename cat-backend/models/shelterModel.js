import mongoose from "mongoose";

const shelterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    shelterOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      address: { type: String, required: true }, // Human-readable address
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: false, // Set to true if geolocation is mandatory
        index: "2dsphere",
      },
    },
    contactDetails: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    capacity: { type: Number, required: true, default: 10 }, // Default capacity
    description: { type: String, default: "" },
    image: { type: String, default: "https://images.unsplash.com/photo-1710322916725-9489fbbc1a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Optional image/logo URL
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export default mongoose.model("Shelter", shelterSchema);
