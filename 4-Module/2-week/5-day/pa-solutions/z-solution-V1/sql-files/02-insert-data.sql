INSERT INTO tools (name, price, department)
VALUES
    ('Snow shovel', 16.50, 'Home & Garden'),
    ('Work light', 29.99, 'Electrical'),
    ('Wheelbarrow', 89.99, 'Home & Garden'),
    ('Pipe Wrench', 18.99, 'Plumbing'),
    ('Pipe Cutter', 36.36, 'Plumbing'),
    ('Rake', 15.45, 'Home & Garden'),
    ('Women''s Gloves', 8.39, 'Home & Garden'),
    ('Men''s Gloves', 8.39, 'Home & Garden');

INSERT INTO customers (first_name, last_name, phone_number)
VALUES
    ('John', 'Smith', 1111111111),
    ('Jane', 'Doe', 2222222222);

INSERT INTO purchases (tool_id, quantity, customer_id)
VALUES

-- John
(2, 1, 1),
(5, 2, 1),

-- Jane
(1, 3, 2),
(2, 1, 2),
(7, 1, 2),
(4, 1, 2),
(5, 1, 2),

-- John
(3, 3, 1),
(8, 2, 1);