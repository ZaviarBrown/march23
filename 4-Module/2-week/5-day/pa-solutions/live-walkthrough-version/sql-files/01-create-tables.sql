-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS customers;

CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    price NUMERIC(5, 2) NOT NULL,
    department VARCHAR(100)
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number INTEGER
);

CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quantity INTEGER DEFAULT 1,
    tool_name VARCHAR(100),
    customer_id INTEGER,
    FOREIGN KEY (tool_name) REFERENCES tools(name),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);