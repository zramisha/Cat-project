import CatPost from "../models/catPostModel.js";
import Cat from "../models/catModel.js";
import User from "../models/userModel.js";
import mongoose from "mongoose";

export const createCatPost = async (req, res, next) => {
  try {
    const { postTitle, cat, postType, message, price } = req.body;

    // Ensure the cat exists
    const existingCat = await Cat.findById(cat);
    if (!existingCat) {
      return res.status(404).json({ success: false, message: "Cat not found" });
    }
    if (!price && postType === "sell") {
      return res.status(400).json({
        success: false,
        message: "Price is required for Sell type post",
      });
    }
    const newPost = await CatPost.create({
      postTitle,
      cat,
      currentOwner: req.user.userid,
      postType,
      message,
      price: (postType === "sell" ? price : null),
    });

    res.status(201).json({
      success: true,
      message: "Cat post created successfully",
      data: newPost,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCatPosts = async (req, res, next) => {
  try {
    const posts = await CatPost.find()
      .populate("cat")
      .populate("currentOwner", "username email contact -password");

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    next(error);
  }
};

export const getCatPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await CatPost.findById(id)
      .populate("cat")
      .populate("currentOwner", "username email contact -password")
      .populate("requests.user", "username email contact -password");

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Cat post not found" });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

export const updateCatPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedPost = await CatPost.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res
        .status(404)
        .json({ success: false, message: "Cat post not found" });
    }

    res.status(200).json({
      success: true,
      message: "Cat post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCatPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedPost = await CatPost.findByIdAndDelete(id);
    if (!deletedPost) {
      return res
        .status(404)
        .json({ success: false, message: "Cat post not found"});
    }

    res
      .status(200)
      .json({ success: true, message: "Cat post deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// controller for adoption and purchase request:
// PATCH /catPosts/:postId/requests - Add a request to a cat post

export const addRequestToPost = async (req, res) => {
  const { id } = req.params; // postId
  const userId = req.user.userid;
  const { type } = req.body; // Expect 'adoption' or 'purchase'

  if (
    !mongoose.Types.ObjectId.isValid(id) ||
    !mongoose.Types.ObjectId.isValid(userId)
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid ID format" });
  }

  try {
    const post = await CatPost.findById(id);
    const user = await User.findById(userId);

    if (!post || !user) {
      return res
        .status(404)
        .json({ success: false, message: "Post or User not found" });
    }

    if (post.currentOwner.toString() === userId.toString()) {
      return res
        .status(400)
        .json({ success: false, message: "Cannot request your own post" });
    }

    // Check if the user has already made a request
    if (
      post.requests.some(
        (request) => request.user.toString() === req.user._id.toString()
      )
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Request already made" });
    }

    // Create the request object
    const newRequest = {
      user: userId,
      status: "pending",
      type: type,
    };

    // Add request to the CatPost
    post.requests.push(newRequest);
    await post.save();

    // Add the same request to the User's requests list
    user.requests.push({
      post: id,
      type: type,
      status: "pending", // Default status
    });
    await user.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Request added successfully",
        post,
        user,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
