const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
// let server;
// server = http.createServer((req, res) => {});
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
        if (reqBody) {
            req.body = parseBody(reqBody);
        }

        sendFormPage(req, res); // needs to be called even if the request doesn't have a body
    });
});

const port = 5000;

server.listen(port, () =>
    console.log(`Successfully started the server on port ${port}`)
);

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
