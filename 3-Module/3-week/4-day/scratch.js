const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        const htmlFile = fs
            .readFileSync("./index.html", "utf-8")
            .replace(/#{game}/g, "Armored Core 6")
            .replace(/HEYLISTEN/g, "EFUHEIOFUEHF");

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(htmlFile);
    }

    if (req.method === "GET" && req.url === "/hello") {
        res.statusCode = 302;
        res.setHeader("Location", "https://www.google.com/");
        res.end();
    }

    if (req.method === "GET" && req.url === "/world") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello world!!!");
    }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const a = [1, 2, 3, 4, 5];
// console.log(a[0]);

// const s = JSON.stringify(a);
// console.log(s[0]);

// const v = JSON.parse(s);
// console.log(v[0]);
