-- SELECT id FROM cats
-- ORDER BY id DESC
-- LIMIT 1;

SELECT COUNT(*) FROM cats;

-- SELECT name, birth_year FROM cats
-- ORDER BY birth_year
-- LIMIT 1;


SELECT name, MIN(birth_year) AS youngest_cat FROM cats;

SELECT name, MAX(birth_year) FROM cats;


-- --! Can't do it :(
-- SELECT name, MIN(birth_year), MAX(birth_year FROM cats;


--! Bonussss

SELECT cats.name, COUNT(toys.id) from toys
JOIN cats ON (cats.id = toys.cat_id)
GROUP BY toys.cat_id;


SELECT 
    cats.name 
FROM 
    toys
JOIN 
    cats
ON
    (cats.id = toys.cat_id)
GROUP BY
    cats.id
HAVING
    COUNT(toys.cat_id) >= 2;