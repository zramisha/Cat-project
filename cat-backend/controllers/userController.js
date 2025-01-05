import User from "../models/userModel.js";
import mongoose from "mongoose";
import CatPost from '../models/catPostModel.js';

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
      .populate("wishlist", "postTitle description") // Assuming 'title' and 'description' fields in CatPost
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



export const addToWishlist = async (req, res) => {
  const userId = req.user.userid;
  const { postId } = req.body; 

  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).json({ success: false, message: "Invalid ID format" });
  }

  try {
    const user = await User.findById(userId);
    const catPost = await CatPost.findById(postId);

    if (!catPost) {
      return res.status(404).json({ success: false, message: "Cat post not found" });
    }

    // Check if the post is already in the user's wishlist
    const isAlreadyInWishlist = user.wishlist.some(item => item.toString() === postId);

    if (isAlreadyInWishlist) {
      return res.status(400).json({ success: false, message: "Post already in wishlist" });
    }

    // Add to wishlist
    user.wishlist.push(catPost._id);
    await user.save();

    res.status(200).json({ success: true, message: "Post added to wishlist", wishlist: user.wishlist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

