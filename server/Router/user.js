const express = require("express");
const router = express.Router();
const { User } = require("../Model/User.js")
const { Counter } = require("../Model/Counter.js");


router.post("/register", (req, res) => {
    let temp = req.body
    Counter.findOne({
        name: "counter"
    }).then((countDoc) => {
        temp.userNum = countDoc.userNum
        const userData = new User(req.body)
        userData.save().then(() => {
            Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(
                () => {
                    res.status(200).json({ success: true });
                }

            )

        })
    }).catch((err) => {
        console.log(err);
        res.statue(400).json({ success: false })
    })

})






module.exports = router;