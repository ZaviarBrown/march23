# Practice Practice Practice

## Feeling sick after writing SQL in the terminal?

### Then ask your doctor about `.read filename.sql`

1. Write SQL in a file
2. Run `.read` **_in the Sqlite CLI_**
3. ???
4. Profit

If you're having trouble, do the "Reading .sql Files" practice first

## Connecting Express

Install and import sqlite

```js
const sqlite3 = require("sqlite3");
```

Create a variable to interact with the database

```js
const db = new sqlite3.Database(
  // File path to url, saved in .env
  process.env.data_source,

  // Give permissions
  sqlite3.OPEN_READWRITE
);
```

`.env`

```env
data_source="dev.db"
```

Get all entries - `db.all`

```js
db.all("SQL command", ["params", "go", "here"], (err, rows) => {
  //
});
```

A single entry - `db.get`

```js
db.get("SQL command", ["params", "go", "here"], (err, row) => {
  //
});
```

Run all other commands - `db.run`

```js
db.run("SQL command", ["params", "go", "here"], (err) => {
  //
});
```

### Express params

When writing SQL in JS, we simply write the command as a string

```js
const allCatsSQL = "SELECT * FROM cats";
const momoSQL = "SELECT * FROM cats WHERE name = 'Momo'";
const params = []; // empty on purpose

db.all(allCatsSQL, params, (err, dbData) => {
  console.log(dbData); // all cat data
});

db.get(momoSQL, params, (err, dbData) => {
  console.log(dbData); // just Momo's data
});
```

If we want dynamic data, we could string interpolate

```js
const anyCat = `SELECT * FROM cats WHERE name = ${catName}`;
```

However, there's a built in syntax for this!

```js
const anyCat = "SELECT * FROM cats WHERE name = ?";
const params = ["Momo"];

// Sqlite will replace the "?" with "Momo"

db.get(anyCat, params, (err, dbData) => {
  console.log(dbData); // Momo's data
});
```

The `params` array maps to the `?`'s in order

---

## Let's make a schema, update some stuff, and get Express into the mix!

Remember! If you get stuck, reference the readings from yesterday/last night's HW
