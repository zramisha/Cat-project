import User from "../models/userModel.js";
import mongoose from "mongoose";

// Get a single user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid user ID format" });
  }

  try {
    const user = await User.findById(id)
      .select("-password") // Exclude the password from the result
      .populate("wishlist", "title description") // Assuming 'title' and 'description' fields in CatPost
      .populate("requests.post", "postTitle status") // Including the title and status of the CatPost
      .populate("catPosts", "title createdAt"); // Just as an example, modify as needed for your schema

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
