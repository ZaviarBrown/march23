const http = require("http");

const server = http.createServer((request, response) => {
    // //! Request
    // console.log("This is the method: ", request.method);
    // console.log("This is the url: ", request.url);
    // console.log("These are the headers: ", request.headers);
    // //! Response
    // console.log("This is the statusCode: ", response.statusCode);

    let reqBody = "";
    request.on("data", (data) => {
        reqBody += data;
    });

    request.on("end", () => {
        console.log("BEFORE CONVERSION", reqBody);
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

        console.log("AFTER CONVERSION", request.body);

        if (request.method === "GET" && request.url === "/") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");

            return response.end("Yo what's up");
        }

        if (request.method === "POST" && request.url === "/cats") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");

            const kittyObj = request.body;

            console.log(kittyObj);

            return response.end(`We love Tenten. ${kittyObj.tenten}`);
        }

        response.statusCode = 404;
        return response.end("Page not found");
    });
});

const port = 3200;

server.listen(port, () => console.log(`This is port ${port} lets gooo`));

// const myFunc = (callBack) => {
//     const firstName = "Z";
//     const lastName = "B";

//     return callBack(firstName, lastName);
// };

// myFunc((first, last) => {
//     console.log(first);
//     console.log(last);
// });
