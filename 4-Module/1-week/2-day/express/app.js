const express = require("express");

const app = express();

app.use(express.urlencoded());

app.get("/eldenRing", (req, res) => {
    res.send("GOTY and also this is so express!");
});

const port = 3000;

app.listen(port, () => console.log("Express is the best"));
