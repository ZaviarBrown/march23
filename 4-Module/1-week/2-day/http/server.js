const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/eldenRing") {
        return res.end("GOTY");
    }
});

const port = 5000;

server.listen(port, () => console.log("Http be out here but kinda slow"));
