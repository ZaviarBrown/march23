const express = require("express");
const app = express();

app.use("/assets", express.static("./assets"));

app.post("/assets/scripts/:fileName", (req, res) => {
    console.log(req.body);
    console.log(req.params.fileName);
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
