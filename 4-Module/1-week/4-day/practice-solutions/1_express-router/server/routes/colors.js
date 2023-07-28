const express = require("express");

const colorRouter = express.Router();

colorRouter.get("/", (req, res) => {
    res.json("GET /colors");
});

colorRouter.delete("/:name/css-styles/:style", (req, res) => {
    res.json("DELETE /colors/:name/css-styles/:style");
});

colorRouter.post("/:name/css-styles", (req, res) => {
    res.json("POST /colors/:name/css-styles");
});

colorRouter.get("/:name", (req, res) => {
    res.json("GET /colors/:name");
});

module.exports = colorRouter;
