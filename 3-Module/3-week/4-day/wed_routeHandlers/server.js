const http = require("http");

let nextDogId = 1;

function getNewDogId() {
    const newDogId = nextDogId;
    nextDogId++;
    return newDogId;
}

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    // When the request is finished processing the entire body
    req.on("end", () => {
        // Parsing the body of the request
        if (reqBody) {
            req.body = reqBody
                .split("&")
                .map((keyValuePair) => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace(/\+/g, " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
            console.log(req.body);
        }
        // Do not edit above this line

        let urlCheck = req.url.split("/");
        const id = urlCheck[urlCheck.length - 1];

        console.log("URL CHECK", urlCheck);
        console.log("ID", id);

        if (req.method === "GET" && req.url === "/") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            return res.end("Dog Club");
        }

        if (req.method === "GET" && req.url === "/dogs") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            return res.end("Dog index");
        }

        if (req.method === "GET" && req.url === "/dogs/new") {
            res.statusCode = 200;
            res.setHeader("Content-type", "text/plain");
            return res.end("Dog create form page");
        }

        if (req.method === "GET" && req.url === `/dogs/${id}`) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            return res.end(`Dog details for dogId: ${id}`);
        }

        // if (req.method === "GET" && req.url.startsWith("/dogs")) {
        //     res.statusCode = 200;
        //     res.setHeader("Content-Type", "text/plain");
        //     return res.end(`Dog details for dogId: ${id}`);
        // }

        if (req.method === "POST" && req.url === "/dogs") {
            res.statusCode = 302;
            res.setHeader("Content-type", "text/plain");
            res.setHeader(`Location`, `/dogs/${getNewDogId()}`);
            return res.end();
        }
        if (req.method === "POST" && req.url === `/dogs/${id}`) {
            console.log(id);
            res.statusCode = 302;
            res.setHeader(`Location`, `/dogs/${id}`);
            return res.end();
        }
        if (
            req.method === "GET" &&
            urlCheck[1] === "dogs" &&
            urlCheck[3] === "edit"
        ) {
            const editId = urlCheck[2];
            res.statusCode = 200;
            res.setHeader("Content-type", "text/plain");
            return res.end(`Dog edit form page for ${editId}`);
        } else {
            res.statusCode = 404;
            res.setHeader("Content-type", "text/plain");
            return res.end("Page Not Found!");
        }

        // Do not edit below this line
        // Return a 404 response when there is no matching route handler
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        return res.end("No matching route handler found for this endpoint");
    });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
