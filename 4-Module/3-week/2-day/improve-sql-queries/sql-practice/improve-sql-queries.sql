----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

--! Double join, gross 
SELECT * FROM cats 
JOIN cat_toys ON (cats.id = cat_toys.cat_id)
JOIN toys ON (toys.id = cat_toys.toy_id)
WHERE toys.id = 5;

--! Using fancy aliasing
SELECT * FROM cat_toys ct
join cats c on c.id = ct.cat_id
join toys t on t.id = ct.toy_id and t.id = 5;

--* Single join, pretty cool
SELECT * FROM cat_toys 
JOIN cats ON cats.id = cat_toys.cat_id 
WHERE cat_toys.toy_id = 5;

--* Single join, pretty cool
SELECT * FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id
WHERE toy_id = 5;

--? Subquery, AMAZZINGGG - not a real metric
SELECT * FROM cats
WHERE id IN (
    SELECT cat_id FROM cat_toys
    WHERE toy_id = 5
);

-- Paste your results below (as a comment):
--! Double join, gross 
4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7

--* Single join, pretty cool - cat_toys first
4509|4002|5|4002|Rachele|Maroon|Foldex Cat
10008|31|5|31|Rodger|Lavender|Oregon Rex
10051|77|5|77|Jamal|Orange|Sam Sawet

--* Single join, pretty cool - cats first first
4002|Rachele|Maroon|Foldex Cat|4509|4002|5
31|Rodger|Lavender|Oregon Rex|10008|31|5
77|Jamal|Orange|Sam Sawet|10051|77|5

--? Subquery
31|Rodger|Lavender|Oregon Rex
77|Jamal|Orange|Sam Sawet
4002|Rachele|Maroon|Foldex Cat


----------
-- Step 1 - Analyze the Query
----------
-- Query:

--! Double join, gross 
EXPLAIN QUERY PLAN SELECT * FROM cats 
JOIN cat_toys ON (cats.id = cat_toys.cat_id)
JOIN toys ON (toys.id = cat_toys.toy_id)
WHERE toys.id = 5;

--* Single join, pretty cool
EXPLAIN QUERY PLAN SELECT * FROM cat_toys 
JOIN cats ON cats.id = cat_toys.cat_id 
WHERE cat_toys.toy_id = 5;

--? Subquery
EXPLAIN QUERY PLAN SELECT * FROM cats
WHERE id IN (
    SELECT cat_id FROM cat_toys
    WHERE toy_id = 5
);

-- Paste your results below (as a comment):

-- --! Double join, gross 
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SCAN cat_toys
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- --* Single join, pretty cool
-- QUERY PLAN
-- |--SCAN cat_toys
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)


-- --? Subquery
-- QUERY PLAN
-- |--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--LIST SUBQUERY 1
--    `--SCAN cat_toys


-- What do your results mean?

    -- Was this a SEARCH or SCAN?

        -- It was both actually

    -- What does that mean?

        -- We can optimize!!!!



----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

--! Double join, gross 
SELECT * FROM cats 
JOIN cat_toys ON (cats.id = cat_toys.cat_id)
JOIN toys ON (toys.id = cat_toys.toy_id)
WHERE toys.id = 5;

--* Single join, pretty cool
SELECT * FROM cat_toys 
JOIN cats ON cats.id = cat_toys.cat_id 
WHERE cat_toys.toy_id = 5;

--? Subquery
SELECT * FROM cats
WHERE id IN (
    SELECT cat_id FROM cat_toys
    WHERE toy_id = 5
);


-- Paste your results below (as a comment):

--! Double join, gross 
--@ -- Run Time: real 0.005 user 0.001574 sys 0.001141

--* Single join, pretty cool
--@ -- Run Time: real 0.001 user 0.000693 sys 0.000070

--? Subquery
--@ -- Run Time: real 0.001 user 0.000838 sys 0.000214

----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

-- super_fast_speedy_sonic_boi
CREATE INDEX
idx_cat_toys_toy_id
ON cat_toys(toy_id);

-- Analyze Query:

--! Double join, gross 
EXPLAIN QUERY PLAN SELECT * FROM cats 
JOIN cat_toys ON (cats.id = cat_toys.cat_id)
JOIN toys ON (toys.id = cat_toys.toy_id)
WHERE toys.id = 5;

--* Single join, pretty cool
EXPLAIN QUERY PLAN SELECT * FROM cat_toys 
JOIN cats ON cats.id = cat_toys.cat_id 
WHERE cat_toys.toy_id = 5;

--? Subquery
EXPLAIN QUERY PLAN SELECT * FROM cats
WHERE id IN (
    SELECT cat_id FROM cat_toys
    WHERE toy_id = 5
);

-- Paste your results below (as a comment):

-- --! Double join, gross 
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- --* Single join, pretty cool
-- QUERY PLAN
-- |--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- --? Subquery
-- QUERY PLAN
-- |--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--LIST SUBQUERY 1
--    `--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)

-- Analyze Results:

    -- Is the new index being applied in this query?

    --? You bet your bottom dollah it is!


----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

--! Double join, gross 
SELECT * FROM cats 
JOIN cat_toys ON (cats.id = cat_toys.cat_id)
JOIN toys ON (toys.id = cat_toys.toy_id)
WHERE toys.id = 5;

--* Single join, pretty cool
SELECT * FROM cat_toys 
JOIN cats ON cats.id = cat_toys.cat_id 
WHERE cat_toys.toy_id = 5;

--? Subquery
SELECT * FROM cats
WHERE id IN (
    SELECT cat_id FROM cat_toys
    WHERE toy_id = 5
);
-- Paste your results below (as a comment):
--! Double join, gross 
--@ -- Run Time: real 0.004 user 0.000346 sys 0.001753

--* Single join, pretty cool
--@ -- Run Time: real 0.000 user 0.000229 sys 0.000143

--? Subquery
--@ -- Run Time: real 0.000 user 0.000153 sys 0.000097

-- Analyze Results:
    -- Are you still getting the correct query results?

        --? Yes

    -- Did the execution time improve (decrease)?

        --? Yes

    -- Do you see any other opportunities for making this query more efficient?

        --? No

---------------------------------
-- Notes From Further Exploration
---------------------------------