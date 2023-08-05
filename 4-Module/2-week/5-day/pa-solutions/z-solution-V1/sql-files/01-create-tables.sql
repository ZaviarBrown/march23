-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS purchases;


CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(60),
    price NUMERIC(5, 2),
    department VARCHAR(60)
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    phone_number INTEGER(10)
);

CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quantity INTEGER,
    tool_id INTEGER,
    customer_id INTEGER,
    FOREIGN KEY (tool_id) REFERENCES tools(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);


