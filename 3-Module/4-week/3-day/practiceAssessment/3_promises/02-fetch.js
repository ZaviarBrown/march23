if (!fetch) {
    var fetch = require("./test/node-fetch")(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

fetch("/colors/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ color: "green" }),
    // body: '{ "color": "green" }',
})
    .then((res) => res.json())
    .then((res) => console.log(res));