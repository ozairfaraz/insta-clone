const express = require("express");
const userRouter = express.Router();
const identifyUser = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");

userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.followUserController,
);

userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowUserController,
);

module.exports = userRouter;
