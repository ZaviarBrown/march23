-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
--! First method
SELECT musicians.first_name, instruments.type 
FROM musician_instruments
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
);

--! Second method
SELECT musicians.first_name, instruments.type
FROM instruments
JOIN musician_instruments ON (
  instruments.id = musician_instruments.instrument_id
)
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
);

--! Third method
SELECT musicians.first_name, instruments.type
FROM musicians
JOIN musician_instruments ON (
  musicians.id = musician_instruments.musician_id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
);