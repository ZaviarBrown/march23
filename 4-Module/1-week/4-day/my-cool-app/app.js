const express = require("express");
const eldenRing = require("./routes/eldenRing");
const path = require("path");

const app = express();

app.use("/eldenRing", eldenRing);
app.use("/space", express.static("./space"));
// app.use("/space", express.static(path.join(__dirname, "./space")));
// console.log(path.join(__dirname, "./space"));
// console.log(__dirname);

app.get("/", (req, res) => {
    console.log(req.url);
    res.send("Home route");
});

app.listen(5000, () => console.log("It's a bird its aplane"));
