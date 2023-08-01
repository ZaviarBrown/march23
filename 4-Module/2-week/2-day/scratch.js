const express = require("express");
const sqlite3 = require("sqlite3");

let nextId = 111;

const app = express();
const db = new sqlite3.Database(
    // File path to url, saved in .env
    process.env.data_source,

    // Give permissions
    sqlite3.OPEN_READWRITE
);

app.get("/", (req, res) => {
    db.all("SELECT * FROM puppies WHERE id = 100;", [], (err, dbData) => {
        console.log(dbData);

        res.json(dbData);
    });
});

app.get("/insert/:petName/:petWeight/:petBreed", (req, res) => {
    const sql = "INSERT INTO puppies VALUES (?, ?, ?, ?, 10, 1);";

    const params = [
        nextId,
        req.params.petName,
        req.params.petWeight,
        req.params.petBreed,
    ];

    console.log(req.params);

    nextId++;

    db.run(sql, params, (err) => {
        db.get(
            "SELECT * FROM puppies WHERE name = ?;",
            [req.params.petName],
            (err, dbData) => {
                res.json(dbData);
            }
        );
    });
});

app.listen(5000, () => console.log(process.env.cool_message));
