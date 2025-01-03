import mongoose from "mongoose";

const catPostSchema = new mongoose.Schema(
  {
    postTitle: { type: String, required: true },
    cat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cat",
      required: true,
    },
    currentOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    requests: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending",
        },
      },
    ],
    postType: {
      type: String,
      enum: ["adoption", "sell"],
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "adopted", "sold", "pending"],
      default: "pending",
    },
    message: { type: String },
    price: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CatPost", catPostSchema);
