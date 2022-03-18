const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      //ref에는 받아올 스키마 정보.
    },
  },
  { collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
