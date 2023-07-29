const express = require("express");
const dogRouter = require("./routes/dogs");

require("express-async-errors");

const app = express();

app.use(express.json());

app.use("/static", express.static("./assets"));

app.use("/dogs", dogRouter);

app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);

    res.on("finish", () => {
        console.log(res.statusCode);
    });

    next();
});

// For testing purposes, GET /
app.get("/", (req, res) => {
    res.json(
        "Express server running. No content provided at root level. Please use another route."
    );
});

// For testing express.json middleware
app.post("/test-json", (req, res, next) => {
    // send the body as JSON with a Content-Type header of "application/json"
    // finishes the response, res.end()
    res.json(req.body);
    next();
});

// For testing express-async-errors
app.get("/test-error", async (req, res) => {
    throw new Error("Hello World!");
});

app.use((req, res, next) => {
    const customError = new Error("The requested resource ain't here okay???");
    customError.statusCode = 404;

    next(customError);
});

app.use((err, req, res, next) => {
    //* Check if the environment is production or development
    const isProduction = process.env.NODE_ENV === "production";

    console.log(err.message);
    res.status(err.statusCode || 500);

    res.json({
        message: err.message || "Something went wrong",
        statusCode: res.statusCode,
        stack: isProduction ? undefined : err.stack,
    });
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
