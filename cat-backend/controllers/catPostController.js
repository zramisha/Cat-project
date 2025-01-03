import CatPost from "../models/catPostModel.js";
import Cat from "../models/catModel.js";

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
