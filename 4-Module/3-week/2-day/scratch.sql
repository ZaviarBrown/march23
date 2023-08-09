SELECT * FROM what
JOIN ever ON (what.id = ever.what_id)
WHERE what.id = 'whocares';

SELECT * FROM what;
SELECT * FROM ever;

PARSE what AND ever WHERE id = 'whocares';