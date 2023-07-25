const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/momo") {
        return res.end("We love momo but http is slow");
    }
});

const port = 3000;

server.listen(port, () => console.log("Yo what's up its ya boi http"));
