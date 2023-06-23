const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // const htmlFile = fs.readFileSync("./index.html", "utf-8");
    const htmlFile = fs.readFileSync("./index.html");

    console.log(req.url);
    if (req.method === "GET" && req.url.startsWith("/static")) {
        const path = req.url.split("/static/").pop();
        const fileExt = req.url.slice(-3);

        if (fileExt === "css") {
            const cssFile = fs.readFileSync(`./assets/${path}`);
            // const cssFile = fs.readFileSync(`./assets/css/application.css`);

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/css");
            return res.end(cssFile);
        }

        if (fileExt === "jpg") {
            const jpgFile = fs.readFileSync(`./assets/${path}`);

            res.statusCode = 200;
            res.setHeader("Content-Type", "image/jpeg");
            return res.end(jpgFile);
        }
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(htmlFile);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
