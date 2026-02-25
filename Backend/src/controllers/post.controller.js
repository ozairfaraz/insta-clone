const postModel = require("../models/post.model");
const likeModel = require("../models/like.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
  });

  const post = await postModel.create({
    caption: req.body.caption || "",
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function getPostsController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({ user: userId });

  res.status(200).json({
    message: "posts fetched successfully",
    posts,
  });
}

async function getSpecificPostController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  console.log("Fetching post with ID:", postId);

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "no post found",
    });
  }

  const isValidUser = post.user.toString() == userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden content",
    });
  }

  res.status(200).json({
    message: "post fetched successfully",
    post,
  });
}

async function likePostController(req, res) {
  const postId = req.params.postId;
  const username = req.user.username;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "no post found",
    });
  }

  await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(200).json({
    message: "post liked successfully",
    post: post,
  });
}

async function getFeedController(req, res) {
  const postsRaw = await postModel.find().populate("user").lean();
  const posts = await Promise.all(
    postsRaw.map(async (post) => {
      const isLiked = await likeModel.findOne({
        user: req.user.username,
        post: post._id,
      });
      post.isLiked = !!isLiked;
      return post;
    }),
  );

  res.status(200).json({
    message: "feed fetched successfully",
    posts,
  });
}

module.exports = {
  createPostController,
  getPostsController,
  getSpecificPostController,
  likePostController,
  getFeedController,
};
