const http = require("http");

const server = http.createServer((request, response) => {
    // //! Request
    // console.log("This is the method: ", request.method);
    // console.log("This is the url: ", request.url);
    // console.log("These are the headers: ", request.headers);

    // //! Response
    // console.log(response.statusCode);

    let reqBody = "";
    request.on("data", (data) => {
        reqBody += data;
    });

    request.on("end", () => {
        // console.log(reqBody);

        if (reqBody) {
            request.body = reqBody
                .split("&")
                .map((keyValuePair) => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace(/\+/g, " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
        }

        // console.log(request.body);

        if (request.method === "GET" && request.url === "/") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");

            return response.end("Hello from the server response!");
        }

        if (request.method === "GET" && request.url === "/hey/i/just/met/you") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");

            return response.end("And this sure is craaaazzaaayyyy");
        }

        if (request.method === "POST" && request.url === "/cute/cats") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");

            console.log(request.body);

            return response.end(`I love my cat Tenten. ${request.body.tenten}`);
        }
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/plain");
        return response.end("Page not found :(");
    });
});

const port = 5000;

server.listen(port, () => console.log(`Yo what's up its ya boi port ${port}`));
