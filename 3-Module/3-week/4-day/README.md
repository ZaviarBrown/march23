# Static Assets, HTML Templating, JSON

## `Static Assets`

Never changes, no matter how many times it's requested

- `fs`: built in node library
- `readFileSync`: method to access contents of a file
  - Just a file in a variable!
- `utf-8`: second parameter to `readFileSync`
  - File contents will display as a string

```js
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/cat") {
    const catImage = fs.readFileSync("./images/cat.png");

    res.statusCode = 200;
    // make sure you have the correct content-type
    res.setHeader("Content-Type", "image/png");
    res.end(catImage);
  }
});
```

---

## HTML Templating

Lets us dynamically change an html file

Just like string interpolation!

```js
const lastName = "Brown";
const name = `Zaviar ${lastName}`;

const myFile = fs
  .readFileSync("./name.html", "utf-8")
  .replace(/#{surname}/g, lastName);
```

---

## Set Header Location

The `Location` Header is pretty cool!

- Make sure you set a `3~~` status code
- Then just set the route you'd like to appear at!

```js
if (req.method === "GET" && req.url === "/hello") {
  res.statusCode = 302;
  res.setHeader("Location", "/world");
  res.end();
}

if (req.method === "GET" && req.url === "/world") {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world!!!");
}
```

---

## `JSON`

`JSON` stands for `JavaScript Object Notation`.

`JSON` is just a way to format data.

You may write a `string` in `JS` like this:

```js
'How now "brown" cow';
```

When it gets converted to `JSON` it would be:

```js
"How now \"brown\" cow";
```

- `JSON` **ALWAYS** uses _`double quotes`_
- the `\` is the `escape character`
- can only have `strings` on one line
- have to make a note of new lines with `\n`

```js
// multiline string in javascript
`"For behold! The storm comes, 
and now all friends should gather together
lest each singly be destroyed" -Gandalf`;
```

```JSON
// same string in JSON
"\"For behold! The storm comes,\n and now all friends should gather together \n lest each singly be destroyed\" -Gandalf"
```

- Same goes for including `arrays` in your `JSON`.

```js
// JS
[1, 2, 3];
```

```JSON
// JSON
"[1, 2 ,3]"
```

- And the same goes for objects
- The difference is that the keys need to be wrapped in double quotes as well, if the value of the key is a string, that should again be wrapped in double quotes.

```js
// JS
{ type: 'cat', name: 'mittens', age: 1, alive: true }
```

```JSON
// JSON
"{\"type\":\"cat\",\"name\":\"mittens\",\"age\":1,\"alive\":true}"
```

- Changing our `data` to a `string` is known as **`serialization`**
- Changing a `string` into `data` is known as **`deserialization`**

## Converting JS to `JSON` and Back

- **`JSON.stringify(value)` turns the value into a `JSON` `string`.**
- **`JSON.parse(str)` turns the `JSON` `string` into a `JS Object`.**

```js
const arr = ["one", 2, 3.1, { four: 4, five: 5 }];
let json = JSON.stringify(arr);
console.log(json);
// ["one",2,3.1,{"four":4,"five":5}]

let js = JSON.parse(json);
console.log(js);
// [ 'one', 2, 3.1, { four: 4, five: 5 } ]
```

- **You will almost NEVER write raw JSON, but you need to be able to read it and understand how it works.**

## JSON in `.js` vs `.json`

Let's take a close look at some `.json` files!

---

## For today's practices

Any test specs should be run **_while the server is live!!!_**
