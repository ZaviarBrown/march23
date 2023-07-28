const express = require("express");
const eldenRouter = require("./routers/eldenRing");
const path = require("path");

const app = express();

app.use("/space", express.static("./space"));
app.use("/space", express.static(path.join(__dirname, "./space")));
console.log(path.join(__dirname, "./space"));
console.log(__dirname);

app.use("/eldenRing", eldenRouter);

app.get("/", (req, res) => {
    res.send("Home route");
});

app.listen(5000, () =>
    console.log("It's a bird, its a plane! IT's eseofisheflse")
);
