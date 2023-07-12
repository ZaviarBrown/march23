const http = require("http");
const { readFileSync } = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        console.log("We just got a GET request babbyyyyyy");
        console.log(req.url);
    }

    if (req.url.endsWith(".js")) {
        const jsFile = readFileSync(`.${req.url}`);

        res.setHeader("Content-Type", "coffeescript");
        res.end(jsFile);
    }

    if (req.method === "GET" && req.url === "/") {
        const htmlFile = readFileSync("./website/index.html");

        res.statusCode = 232;
        res.setHeader("Content-Type", "applesauce");
        res.end(htmlFile);
    }
});

server.listen(3000, () => console.log("Running!"));
