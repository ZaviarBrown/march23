const express = require("express");

const router = express.Router();

// '/eldenRing/'
router.get("/", (req, res) => {
    res.send("Dang this is actually the best game ever");
});

router.get("/nextGame", (req, res) => {
    console.log(req.url);

    res.send("Armored Core 6 comes so soon!");
});

router.get("/eldenRing", (req, res) => {
    res.send("Can't wait for DLC");
});

module.exports = router;
