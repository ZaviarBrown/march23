const express = require("express");
const app = express();

app.use(express.json());

const peopleRouter = require("./routes/people");
const colorRouter = require("./routes/colors");
const toolRouter = require("./routes/tools");

app.use("/people", peopleRouter);
app.use("/colors", colorRouter);
app.use("/tools", toolRouter);

app.post("/post", (req, res) => {
    res.json({
        lookAtMe: req.body.tool,
    });
});

// app.get("/people/", (req, res) => {
//     res.json("Number 1");
// });

// app.post("/people/:personId/likes", (req, res) => {
//     res.json("Number 2");
// });

// app.delete("/people/:personId", (req, res) => {
//     res.json("Number 3");
// });

// app.get("/people/best-dressed/comments", (req, res) => {
//     res.json("Number 4");
// });

// app.get("/people/people/:name/lookup", (req, res) => {
//     res.json("Number 5");
// });

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
