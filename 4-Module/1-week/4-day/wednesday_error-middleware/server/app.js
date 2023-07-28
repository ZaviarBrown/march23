const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("GET / This is the root URL");
});

app.use((req, res, next) => {
    const myError = new Error("Sorry, the requested is whatever");
    myError.status = 404;

    // throw myError
    next(myError);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ message: err.message, statusCode: err.status });
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
