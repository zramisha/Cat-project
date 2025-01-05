import mongoose from "mongoose";

const shelterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    shelterOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Shelter", shelterSchema);
