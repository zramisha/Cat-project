import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "password should be atleast 6 character"],
      select: true,
    },
    type: {
      type: String,
      enum: ["admin", "shelterOwner", "default"],
    },
    contact: {
      type: String,
      required: true,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CatPost",
      },
    ], // Tracks posts the user added to their wishlist
    requests: [
      {
        post: { type: mongoose.Schema.Types.ObjectId, ref: "CatPost" },
        type: {
          type: String,
          enum: ["adoption", "purchase"], // Derived from CatPost's postType
        },
        status: {
          type: String,
          enum: ["pending", "approved", "rejected"], // Specific to the user's request
          default: "pending",
        },
        message: { type: String }, // Optional message from the user
      },
    ], // Unified list of adoption/purchase requests
    catPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CatPost",
      },
    ], // Posts created by the user
  },
  { timestamps: true }
);

// middlewares: //
//for password hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// for password checking
userSchema.methods.comparPassword = async function (userPassword) {
  const isMatched = await bcrypt.compare(userPassword, this.password);
  return isMatched;
};

// JSON webtoken
userSchema.methods.createJWT = function () {
  return JWT.sign(
    {
      userid: this._id,
      email: this.email,
      username: this.username,
      type: this.type,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export default mongoose.model("User", userSchema);
