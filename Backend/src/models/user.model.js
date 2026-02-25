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
      "https://i.pinimg.com/736x/89/44/0d/89440dc00a45f11a0726dd469178a63c.jpg",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
