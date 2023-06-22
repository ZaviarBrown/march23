# Server Surfers

## `Node.js Servers`

To create a server in `Node.js`:

- Import the `http` package (built in to `node`, no need to `npm install`)

  ```js
  const http = require("http");
  ```

- Call `createServer` method on the import and pass a function as a single argument

  ```js
  const server = http.createServer((req, res) => {
    // ...
  });
  ```

- Define and save your `port` number to a variable
- Set up a `listener` on the server for that `port`

  ```js
  const port = 5000;

  server.listen(port, () => console.log("Server is listening on port", port));
  ```

- Start your server by running the file using `node` in the terminal

  ```console
  node server.js
  ```

### **The server is now ready to receive requests! (Once you create some)**

---

## `Requests`

The Request object is huge and has a lot of properties, but the properties that we're most interested in are:

- `method`: `string` value of the `HTTP verb`
- `url`: `string` value of the `route`
- `headers`: `object` with key value pairs for the headers
- `on`: `method` that listens for `events`
  - triggers a callback to run when those `events` are triggered

## Parsing an `application/x-www-form-urlencoded` Request

These requests are formatted in a very specific way, so we have to handle them with some crazy nonsense

You'll do this on your own today, but moving forward this will always be handled for you

```js
const server = http.createServer((req, res) => {
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
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
    }
  });
});
```

## `Responses`

The `Response` object is also huge but the properties that we're most interested in are:

- `StatusCode`: 3 digit value of the `status code`
- `setHeader`: `method` that sets a `header`
- `write`: `method` that allows you to add to the `body`
- `end`: `method` that allows you to add to the `body` and send the `response` **immediately**

### `Setting Response Properties`

- `StatusCode`
  - `res.statusCode = 500` (whichever code you want to use)
- `Headers`
  - `res.setHeader('nameOfHeader', 'valueOfHeader')`
- `Body`
  - `res.write('textToAddToBody')`
    - Adds to the `body` of the `response`
    - Can be called multiple times to add to the `body`
    - **Does not send the `response`**
  - `res.end('textToAddToBody')`
    - Adds text to the `body` of the `response` and **immediately send the response**
    - Can only be called once as it completes the response

> If you don't send a `response`, your `server` will never complete it's request. It will become a `Hanging Server` and you will have to restart your `server` to end the process. Always send some kind of `response`!

---

## `Creating Routes Handlers`

`Route` handlers handle the `requests` for each `route` and determine what `response` will be sent back.

In `HTTP` we just need to check the `method` and `url` of the `request` to determine different `routes`, then create separate rules for each.

```js
if (req.method === "GET" && req.url === "/") {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // important to return
  return res.end("Splash Page");
}
```
