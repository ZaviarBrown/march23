const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is the greatest game ever");
});

router.get("/next-game", (req, res) => {
    res.send("Armored Core 6 comes out so soon!!!");
});

router.get("/eldenRing", (req, res) => {
    res.send("When's that DLC tho?");
});

module.exports = router;
