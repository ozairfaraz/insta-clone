const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

// @route   POST /api/posts
// @desc    Create a post
postRouter.post(
  "/",
  upload.single("avatar"),
  identifyUser,
  postController.createPostController,
);

// @route   GET /api/posts
// @desc    Get all posts of the user and the users he follows
postRouter.get("/", identifyUser, postController.getPostsController);

// @route   GET /api/posts/details/:postId
// @desc    Get details of a specific post
postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getSpecificPostController,
);

// @route  POST /api/posts/like/:postId
// @desc   Like a post
postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);

// @route GET /api/posts/feed
// @desc  Get all posts in the DB
// access Private
postRouter.get("/feed", identifyUser, postController.getFeedController);

module.exports = postRouter;
