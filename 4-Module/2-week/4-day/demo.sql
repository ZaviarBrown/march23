.mode box

-- PRAGMA foreign_keys = 1;
PRAGMA foreign_keys = ON;


DROP TABLE IF EXISTS trees;
DROP TABLE IF EXISTS leaves;


-- CREATE TABLE trees (
--   id INTEGER PRIMARY KEY AUTOINCREMENT
-- );

-- CREATE TABLE leaves (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   tree_id INTEGER,
--   FOREIGN KEY (tree_id) REFERENCES trees(id) ON DELETE CASCADE
-- );

-- INSERT INTO trees DEFAULT VALUES;
-- INSERT INTO trees DEFAULT VALUES;

-- INSERT INTO leaves (tree_id)
-- VALUES
-- (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), 
-- (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), 
-- (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), 
-- (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), 
-- (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), 
-- (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (null);



-- SELECT * FROM trees;
-- SELECT * FROM leaves;






CREATE TABLE trees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tree_type VARCHAR(50),
  location VARCHAR(255)
);

CREATE TABLE leaves (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color VARCHAR(50),
  leaf_type VARCHAR(255),
  tree_id INTEGER,
  FOREIGN KEY (tree_id) REFERENCES trees(id) ON DELETE CASCADE
);

INSERT INTO trees (tree_type, location) VALUES ('Pine', 'Washington');
INSERT INTO trees (tree_type, location) VALUES ('Catcus', 'Arizona');

INSERT INTO leaves (color, leaf_type, tree_id)
VALUES
('Green', 'Pine Leaves #1', 1), 
('Green', 'Pine Leaves #2', 1), 
('Green', 'Pine Leaves #3', 1), 
('Green', 'Pine Leaves #4', 1), 
('Green', 'Pine Leaves #5', 1), 
('Green', 'Pine Leaves #6', 1), 
('Green', 'Pine Leaves #7', 1), 
('Green', 'Pine Leaves #8', 1), 
('Green', 'Pine Leaves #9', 1), 
('Green', 'Pine Leaves #10', 1), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2), 
('White', 'Pricklies', 2);


-- SELECT leaf_type FROM leaves;
-- SELECT tree_type FROM trees;

SELECT trees.tree_type, leaves.leaf_type FROM leaves
JOIN trees ON (leaves.tree_id = trees.id);

-- SELECT trees.tree_type, leaves.leaf_type FROM leaves LEFT JOIN trees ON (leaves.tree_id = trees.id);
-- SELECT trees.tree_type, leaves.leaf_type FROM trees LEFT JOIN leaves ON (leaves.tree_id = trees.id);
