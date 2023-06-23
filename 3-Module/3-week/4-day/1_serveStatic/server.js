const http = require("http");
const fs = require("fs");

//? --------------------------------------------------------------------
//? --------------------------------- MINE ---------------------------------
//? --------------------------------------------------------------------

// const server = http.createServer((req, res) => {
//     const htmlFile = fs.readFileSync("./index.html", "utf-8");

//     // console.log(req.url);

//     if (req.method === "GET" && req.url.startsWith("/static")) {
//         const fileExt = req.url.slice(-3);

//         const path = req.url.split("/static").pop(); // [1]

//         if (fileExt === "css") {
//             const cssFile = fs.readFileSync(`./assets${path}`, "utf-8");

//             res.statusCode = 200;
//             res.setHeader("Content-Type", "text/css");
//             return res.end(cssFile);
//         }

//         if (fileExt === "jpg") {
//             const jpgFile = fs.readFileSync(`./assets${path}`);

//             res.statusCode = 200;
//             res.setHeader("Content-Type", "image/jpeg");
//             return res.end(jpgFile);
//         }
//     }

//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     return res.end(htmlFile);
// });

//? --------------------------------------------------------------------
//? --------------------------------- Debug 1 ---------------------------------
//? --------------------------------------------------------------------

// const server = http.createServer((req, res) => {
//     const htmlFile = fs.readFileSync("./index.html", "utf-8");
//     const cssFile = fs.readFileSync("./assets/css/application.css", "utf-8");
//     const imagesFile = fs.readFileSync("./assets/images/dog.jpg");

//     if (req.method === "GET" && req.url.startsWith("/static/")) {
//         let type;
//         if (req.url.endsWith("jpg")) {
//             type = "image/jpeg";
//             res.setHeader("Content-Type", `${type}`);

//             return res.end(imagesFile);
//         }

//         if (req.url.endsWith("css")) {
//             type = "text/css";
//             res.statusCode = 200;
//             res.setHeader("Content-Type", `${type}`);
//             return res.end(cssFile);
//         }
//     }

//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     return res.end(htmlFile);
// });

//? --------------------------------------------------------------------
//? --------------------------------- Debug 2 ---------------------------------
//? --------------------------------------------------------------------

// const server = http.createServer((req, res) => {
//     const html = fs.readFileSync("./index.html", "utf-8");

//     console.log(req.url);

//     if (req.method === "GET" && req.url.startsWith("/static")) {
//         const fileExt = req.url.slice(-3);
//         const path = req.url.split("/static").pop();

//         if (fileExt === "css") {
//             const cssFile = fs.readFileSync(`./assets${path}`, "utf-8");

//             res.statusCode = 200;
//             res.setHeader("Content-Type", "text/css");
//             return res.end(cssFile);
//         }

//         if (fileExt === "jpg") {
//             const jpgFile = fs.readFileSync(`./assets${path}`);

//             res.statusCode = 200;
//             res.setHeader("Content-Type", "image/jpeg");
//             return res.end(jpgFile);
//         }
//     }

//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     return res.end(html);
// });

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
