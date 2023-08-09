----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

--! Double join, yucky
SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
JOIN toys ON (cat_toys.toy_id = toys.id)
WHERE cat_toys.toy_id = 5;

--* Single join, honestly still cool
SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
WHERE cat_toys.toy_id = 5;

--? Subquery wohoo
SELECT * FROM cats
WHERE id IN (
    SELECT cat_id from cat_toys -- 4002, 31, 77
    WHERE toy_id = 5
);


-- Paste your results below (as a comment):

--! Double join
-- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
-- 31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
-- 77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7

--* Single join
-- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5
-- 31|Rodger|Lavender|Oregon Rex|10008|31|5
-- 77|Jamal|Orange|Sam Sawet|10051|77|5

--? Subquery
-- 31|Rodger|Lavender|Oregon Rex
-- 77|Jamal|Orange|Sam Sawet
-- 4002|Rachele|Maroon|Foldex Cat

----------
-- Step 1 - Analyze the Query
----------
-- Query:

--! Double join, yucky
EXPLAIN QUERY PLAN SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
JOIN toys ON (cat_toys.toy_id = toys.id)
WHERE cat_toys.toy_id = 5;

--* Single join, honestly still cool
EXPLAIN QUERY PLAN SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
WHERE cat_toys.toy_id = 5;

--? Subquery wohoo
EXPLAIN QUERY PLAN SELECT * FROM cats
WHERE id IN (
    SELECT cat_id from cat_toys -- 4002, 31, 77
    WHERE toy_id = 5
);

-- Paste your results below (as a comment):

--! Double join, yucky
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SCAN cat_toys
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

--* Single join, honestly still cool
-- QUERY PLAN
-- |--SCAN cat_toys
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

--? Subquery wohoo
-- QUERY PLAN
-- |--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--LIST SUBQUERY 1
--    `--SCAN cat_toys

-- What do your results mean?

    -- Was this a SEARCH or SCAN?

        -- It was both!!!

    -- What does that mean?

        -- The scans can still be optimized



----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

--! Double join, yucky
SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
JOIN toys ON (cat_toys.toy_id = toys.id)
WHERE cat_toys.toy_id = 5;

--* Single join, honestly still cool
SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
WHERE cat_toys.toy_id = 5;

--? Subquery wohoo
SELECT * FROM cats
WHERE id IN (
    SELECT cat_id from cat_toys -- 4002, 31, 77
    WHERE toy_id = 5
);

-- Paste your results below (as a comment):

--! Double join, yucky
--@ -- Run Time: real 0.004 user 0.001879 sys 0.000695
--* Single join, honestly still cool
--@ -- Run Time: real 0.001 user 0.000760 sys 0.000196
--? Subquery wohoo
--@ -- Run Time: real 0.000 user 0.000695 sys 0.000123

----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

-- sonic_so_fast
CREATE INDEX
idx_cat_toys_toy_id
ON cat_toys(toy_id);

-- Analyze Query:
--! Double join, yucky
EXPLAIN QUERY PLAN SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
JOIN toys ON (cat_toys.toy_id = toys.id)
WHERE cat_toys.toy_id = 5;

--* Single join, honestly still cool
EXPLAIN QUERY PLAN SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
WHERE cat_toys.toy_id = 5;

--? Subquery wohoo
EXPLAIN QUERY PLAN SELECT * FROM cats
WHERE id IN (
    SELECT cat_id from cat_toys -- 4002, 31, 77
    WHERE toy_id = 5
);

-- Paste your results below (as a comment):
--! Double join, yucky
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

--* Single join, honestly still cool
-- QUERY PLAN
-- |--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

--? Subquery wohoo
-- QUERY PLAN
-- |--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--LIST SUBQUERY 1
--    `--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)


-- Analyze Results:

    -- Is the new index being applied in this query?

        -- Yes


----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

--! Double join, yucky
SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
JOIN toys ON (cat_toys.toy_id = toys.id)
WHERE cat_toys.toy_id = 5;

--* Single join, honestly still cool
SELECT * FROM cats
JOIN cat_toys ON (cat_toys.cat_id = cats.id)
WHERE cat_toys.toy_id = 5;

--? Subquery wohoo
SELECT * FROM cats
WHERE id IN (
    SELECT cat_id from cat_toys -- 4002, 31, 77
    WHERE toy_id = 5
);

-- Paste your results below (as a comment):

--! Double join, yucky
--@ -- Run Time: real 0.000 user 0.000144 sys 0.000119
--* Single join, honestly still cool
--@ -- Run Time: real 0.000 user 0.000149 sys 0.000102
--? Subquery wohoo
--@ -- Run Time: real 0.000 user 0.000149 sys 0.000131

-- Analyze Results:
    -- Are you still getting the correct query results?

        -- Yes

    -- Did the execution time improve (decrease)?

        -- Oh yeahhhh

    -- Do you see any other opportunities for making this query more efficient?

        -- We can't make this any more efficient


---------------------------------
-- Notes From Further Exploration
---------------------------------