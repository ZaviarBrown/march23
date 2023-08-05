--! Using a JOIN
-- SELECT toys.name from toys
-- JOIN cats ON (toys.cat_id = cats.id)
-- WHERE cats.name = 'Garfield';

--! JavaScriptQL example
-- const catId = SELECT id from cats WHERE name = 'Garfield'
-- SELECT name from toys WHERE cat_id = catId
-- SELECT name from toys
-- WHERE cat_id = (
--     SELECT id FROM cats WHERE name = 'Garfield'
-- );


-- INSERT INTO toys (name, cat_id)
-- VALUES 
-- ('Pepperoni', (SELECT id FROM cats WHERE name = 'Garfield'));

-- SELECT name from toys
-- WHERE cat_id = (
--     SELECT id FROM cats WHERE name = 'Garfield'
-- );

--! Bonus

--! old version
-- VALUES
--     ('Cat Bed', 1),
--     ('Cat Bed', 2),
--     ('Cat Bed', 3),

-- INSERT INTO toys (name, cat_id)
-- SELECT 'Cat Bed', id FROM cats
-- WHERE birth_year < 2013;


-- SELECT * FROM cats;
-- SELECT * FROM cats_backup;

-- INSERT INTO cats_backup
-- SELECT * FROM cats;


-- SELECT * FROM cats;
-- SELECT * FROM cats_backup;

-- INSERT INTO toys_backup
-- SELECT * FROM toys;

SELECT * FROM toys_backup;


-- SELECT * FROM toys;