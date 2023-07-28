const express = require("express");

const colorRouter = express.Router();

colorRouter.delete("/:name/css-styles/:style", (req, res) => {
    res.json({ route: "DELETE /colors/:name/css-styles/:style" });
});

colorRouter.post("/:name/css-styles", (req, res) => {
    res.json({ route: "POST /colors/:name/css-styles" });
});

colorRouter.get("/:name", (req, res) => {
    res.send("GET /colors/:name");
});

colorRouter.get("/", (req, res) => {
    res.send("GET /colors");
});

module.exports = colorRouter;
