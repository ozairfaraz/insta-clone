const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name already exists"],
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/https://ik.imagekit.io/aqfyg6yeg/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.webp/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
