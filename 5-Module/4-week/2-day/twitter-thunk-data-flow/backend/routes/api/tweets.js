const express = require("express");
const { asyncHandler } = require("../../utils");

const router = express.Router();
const db = require("../../db/models");

const { Tweet } = db;

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const tweets = await Tweet.findAll();
        res.json(tweets);
    })
);

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const stepNumber = req.body.stepNumber;
        delete req.body.stepNumber;

        const tweets = await Tweet.create(req.body);

        console.log(
            "--------------------------------------------------------------------"
        );
        console.log(
            `Step #${stepNumber}: Made it to the backend route! \nTweet created successfully! \nSending a response to the frontend...`
        );
        console.log(
            "--------------------------------------------------------------------"
        );

        tweets.dataValues.stepNumber = stepNumber + 1;

        res.json(tweets);
    })
);

module.exports = router;
