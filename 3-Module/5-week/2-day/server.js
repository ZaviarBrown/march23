// const http = require("http");
// const { readFileSync } = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         console.log("We got a get request babyyyyy");
//         console.log(req.url);
//     }

//     if (req.method === "GET" && req.url === "/") {
//         console.log("Will I run twice?");
//         res.statusCode = 225;
//         res.setHeader("Content-Type", "applesauce");
//         res.end("Yo");
//     }
// });

//? --------------------------------------------------------------------

// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         console.log("We got a get request babyyyyy");
//         console.log(req.url);
//     }

//     if (req.method === "GET" && req.url === "/") {
//         const htmlFile = readFileSync("./website/index.html");

//         res.setHeader("Content-Type", "text/html");
//         res.end(htmlFile);
//     }

//     if (req.method === "GET" && req.url.endsWith(".js")) {
//         const jsFile = readFileSync(`.${req.url}`);

//         res.setHeader("Content-Type", "vanilla/frap");
//         res.end(jsFile);
//     }
// });

// server.listen(3000, () => console.log("Running"));

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         console.log("We got a get request babyyyyy");
//         console.log(req.url);
//     }

//     if (req.method === "GET" && req.url === "/") {
//         const htmlFile = readFileSync("./website/index.html");

//         res.setHeader("Content-Type", "text/html");
//         res.end(htmlFile);
//     }

//     if (req.method === "GET" && req.url.endsWith(".js")) {
//         const jsFile = readFileSync(`.${req.url}`);

//         res.setHeader("Content-Type", "vanilla/frap");
//         res.end(jsFile);
//     }
// });

// server.listen(3000, () => console.log("Running"));
