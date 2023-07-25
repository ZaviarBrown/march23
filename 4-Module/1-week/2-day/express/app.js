const express = require("express");

const app = express();

app.use(express.json());

app.get("/momo", (req, res) => {
    res.send("Express is fast a eff and momo knows it");
});

app.get("/kitties/:zaviarsCatNames", (req, res) => {
    console.log(req.params);
    console.log(req.params.zaviarsCatNames);

    res.send("whatever");
});

console.log("Heyopooo");

const port = 5000;

app.listen(port, () => console.log("Express be so quick!"));

