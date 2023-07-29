const express = require("express");

const toolRouter = express.Router();

let newId = 0;

toolRouter.post("/", (req, res) => {
    newId++;

    res.json({
        newTool: req.body.tool,
        id: newId,
    });
});

module.exports = toolRouter