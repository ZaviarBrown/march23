const http = require("http");

const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(responseBody);
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("Not a valid request");
});

const port = 5000;

server.listen(port, () => console.log("Hey I'm port", port));
