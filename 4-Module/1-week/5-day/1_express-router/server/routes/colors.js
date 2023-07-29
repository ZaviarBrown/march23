const express = require("express");

const colorRouter = express.Router();

colorRouter.get("/colors", (res, req) => {
    res.json("GET /colors");
});

module.exports = colorRouter;
