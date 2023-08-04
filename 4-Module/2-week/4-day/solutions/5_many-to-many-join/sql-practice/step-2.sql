-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
--! First method
SELECT musicians.first_name, musicians.last_name
FROM musician_instruments
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
)
WHERE instruments.type = 'piano';

--! Second method
SELECT musicians.first_name, musicians.last_name
FROM instruments
JOIN musician_instruments ON (
  instruments.id = musician_instruments.instrument_id
)
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
)
WHERE instruments.type = 'piano';

--! Third method
SELECT musicians.first_name, musicians.last_name
FROM musicians
JOIN musician_instruments ON (
  musicians.id = musician_instruments.musician_id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
)
WHERE instruments.type = 'piano';
