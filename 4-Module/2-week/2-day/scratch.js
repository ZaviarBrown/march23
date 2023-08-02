const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();

let nextId = 105;

const db = new sqlite3.Database(
    // File path to the db url, saved in .env
    process.env.data_source,

    // Give permissions
    sqlite3.OPEN_READWRITE
);

app.get("/", (req, res) => {
    db.all("SELECT * FROM puppies", [], (err, dbData) => {
        res.json(dbData);
    });
});

app.get("/insert/:catName/:catAge/:catBreed", (req, res) => {
    // const sql = "INSERT INTO puppies (id, name) VALUES (11, 'Momo');";
    // const sql = `INSERT INTO puppies (id, name) VALUES (11, ${catName});`;
    const sql = "INSERT INTO puppies VALUES (?, ?, ?, ?, 10, 1);";
    const params = [
        nextId, // 100
        req.params.catName, // Kiki
        req.params.catAge, // 2
        req.params.catBreed, // This cat
    ];

    nextId++;

    db.run(sql, params, (err) => {
        db.get(
            "SELECT * FROM puppies WHERE name = ?",
            [req.params.catName],
            (err, dbData) => {
                res.json(dbData);
            }
        );
    });
});

app.listen(5000, () => console.log(process.env.cool_message));
