import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Signup controller
export const signupController = async (req, res, next) => {
  try {
    const { username, firstName, lastName, email, password, contact, type } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Create new user
    const newUser = await User.create({ username, firstName, lastName, email, password, contact, type: type || "default" });

    // Generate JWT token
    const token = newUser.createJWT();



    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        _id: newUser._id,
        username: newUser.username,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        contact: newUser.contact,
        type: newUser.type,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

// Login controller
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = user.createJWT();


    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        contact: user.contact,
        type: user.type,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

// Update password
export const updatePassword = async (req, res, next) => {
  const { username } = req.user; // Authenticated user's username
  const { oldPassword, newPassword } = req.body;

  try {
    // Validate input
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ success: false, message: "Old and new passwords are required" });
    }

    // Find user
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Incorrect current password" });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
};
