const express = require("express");
const router = express.Router();
const multer = require("multer");

const { Comments } = require("../Model/Comments.js")
const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");


router.post("/submit", (req, res) => {
    let temp = {
        comment: req.body.comment,
        postId: req.body.postId,
    }

    User.findOne({ uid: req.body.uid }).exec().then((userInfo) => {
        temp.author = userInfo._id
        const newComments = new Comments(temp)
        newComments.save(() => {
            Post.findOneAndUpdate(
                {
                    _id: req.body.postId,
                }, { $inc: { commentNum: 1 } }
            ).exec().then(() => {
                res.status(200).json({ success: true });
            })
        })
    }).catch((err) => {

        res.status(400).json({ success: false })
    })

})
module.exports = router;