const express = require("express");
const router = express.Router();

const { Sport } = require("../db/models");

router.get("/", async (req, res) => {
    const allSports = await Sport.findAll({
        order: [["name", "DESC"]],
    });

    return res.json(allSports);
});

module.exports = router;
