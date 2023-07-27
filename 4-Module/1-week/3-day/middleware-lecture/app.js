const express = require("express");

const app = express();

app.use(express.json());

const myMiddleware = (req, res, next) => {
    console.log("I'm a middleware function!");
    next();
};

const secondMid = (req, res, next) => {
    console.log("I'm the second middleware :)");
    next();
};

const beforeTheMid = (req, res, next) => {
    console.log("I ran before the response!");
    next();
};

const firstAndSecond = [myMiddleware, secondMid];

app.get("/", beforeTheMid);

app.get("/users", firstAndSecond, (req, res) => {
    res.send("user data");
});

app.get("/", myMiddleware, (req, res) => {
    console.log("The / route");
    res.send("Successfully hit / route");
});

app.use((req, res, next) => {
    const myCoolError = new Error("Whoopsies couldn't find that");
    myCoolError.status = 404;
    next(myCoolError);
});

app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(err.status || 500);

    // res.send("Whoops! Some error happened I guess?");

    next();
});

app.use((err, req, res, next) => {
    res.send("We threw an error!");
});

app.use((req, res, next) => {
    res.send("We did not throw an error!");
});

app.listen(5000, () => console.log("Middleware is so scawwyyy"));

// app.use(beforeTheMid);

//! This is the same
/**
 *  let status;

    if (err.status !== undefined) {
        status = err.status;
    } else {
        status = 500;
    }

    res.status(status);

    
 */

//! As this!

// res.status(err.status || 500);
