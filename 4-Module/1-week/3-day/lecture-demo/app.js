const express = require("express");

const app = express();

app.use(express.json());

app.get("/hello/*/taco/*/eldenRing", (req, res) => {
    res.send("Whoah this is crazaaayyy");
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

app.listen(5000, () => console.log("We're up and running!"));
