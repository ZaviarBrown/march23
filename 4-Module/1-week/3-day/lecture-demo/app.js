const express = require("express");

const app = express();

app.use(express.json());

// /hello/somethinelse/another/one/like/kalid/taught/me/farewell/somethingAtAll

// /hello
// * ===  /somethinelse/another/one/like/kalid/taught/me
// /farewell 
// * === /somethingAtAll
// /eldenRing

app.get("/hello/*/farewell/*/eldenRing", (req, res) => {
    res.send("Woah this is crazy");
});

app.get("/goodbye/until/forever", (req, res) => {
    res.send("So long. Farewell. Have a great life!");
});

app.get("/goodbye/until/:time", (req, res) => {
    res.send(`Goodbye. See you ${req.params.time}.`);
});

app.get("/goodbye/*", (req, res) => {
    res.send("Goodbye, my friend!");
});

app.get("/*", (req, res) => {
    res.send("I have become everything");
});

app.listen(5000, () => console.log("We're up and running!"));
