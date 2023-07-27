const express = require("express");

const app = express();

app.use(express.json());

const myMiddleware = (req, res, next) => {
    console.log("I'm a middleware function!");
    next();
};

const secondMid = (req, res, next) => {
    console.log("Second middleware just ran!!!");
    next();
};

const thanosware = (req, res, next) => {
    console.log("You can't stop me");
    next();
};

const finalMid = (req, res, next) => {
    console.log("This be my mightiest mid");
    next();
};

app.use(thanosware);

const multiMid = [myMiddleware, secondMid];

app.get("/", finalMid);

app.get("/users", secondMid, (req, res) => {
    res.send("User data");
});

app.get("/", multiMid, (req, res) => {
    res.send("Successfully hit the / route");
});

app.use((req, res, next) => {
    // throw new Error("Whoopsies have no idea what you want!");
    const myEwwor = new Error("Uh oh bad");
    myEwwor.status = 450;

    next("as long as I receive SOMETHING");
    // next()
});

// app.use((err, req, res, next) => {
//     console.log(err);
//     next(new Error("Other more different error"));
// });

// app.use((req, res, next) => {
//     res.send("no error here!");
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send("Whoops! Some error happened I guess?");
// });

app.listen(5000, () => console.log("Yeah we out here expressin"));

/**
 * ! This is the same
 *     
    let status;
    if (err.status !== undefined) {
        status = err.status;
    } else {
        status = 500;
    }


// ! As this
     res.status(err.status || 500);
 */
