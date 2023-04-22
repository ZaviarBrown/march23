# A strangely timed sneak peek into the future

## JS Runtime Environments

We have two environments that JS can run in

- Browser
- Node

These both implement Google Chrome's V8 engine under the hood

## No really...EVERYTHING is an Object

When we create a global variable, we're actually just adding a `key` `value` pair to the `Global Object`

Both Node and the Browser have their own global objects

- Node
  - `global`
- Browser
  - `window`

These different implementations exist to serve the needs of our different environments

## DOM vs BOM

The `Document Object Model` is an object that contains everything available to our document

- This is where html lives
  The `Browser Object Model` is an object that contains everything available to our browser
- This is where everything lives
- `window.navigator`
  - Returns a reference to the navigator object.
- `window.screen`
  - Returns a reference to the screen object associated with the window.
- `window.history`
  - Returns a reference to the history object.
- `window.location`
  - Gets/sets the location, or current URL, of the window object.
- `window.document`, which can be shortened to just document
  - Returns a reference to the document that the window contains.

## The Request Response Cycle - How everything works online

This is the single most important concept for all of web development

- Essentially our laws of physics

The cycle consists of

- The user is shown a webpage
- The user clicks on something
- A request is sent to a server
- The server figures out what to send back
- A response is sent to the user
- The user is shown a new webpage

