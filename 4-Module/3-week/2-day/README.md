# You thought you were done with SQL? 😂

## Efficiency

### What makes a database less efficient?

- Databases take time to connect to
  - Each query (command) is a single connection
  - More connections === more time wasted
- Large datasets take longer to query
- Getting 100 columns is slower than getting 1 column

### How can we increase the efficiency?

- `JOIN` queries help bundle multiple queries into one
- Only get data that you actually need: remove unused query data
- Not much you can do about large datasets, big site === big data!

## The SeQueL to Big O - `N+1` Queries

Let's revisit what an `O(n)` function looks like in JS

```js
const petArr = ["dog", "cat", "parrot", "turtle", "goat"];
const toyArr = [];
for (let i = 0; i < petArr.length; i++) {
  const currPet = petArr[i];

  toyArr.push(`${currPet} toy`);
}

console.log(toyArr); // ["dog toy", "cat toy", "parrot toy", "turtle toy", "goat toy"]
```

For every pet in `petArr` we add a "toy", so it's an `O(n)` operation

Now let's look at a similar SQL query

```sql
SELECT type FROM pets; -- "dog", "cat", "parrot", "turtle", "goat"

SELECT * FROM toys WHERE pet_type = 'dog';
SELECT * FROM toys WHERE pet_type = 'cat';
SELECT * FROM toys WHERE pet_type = 'parrot';
SELECT * FROM toys WHERE pet_type = 'turtle';
SELECT * FROM toys WHERE pet_type = 'goat';
```

Even though the code looks very different, we're doing something similar here

- First we select for all pets
  - This is like creating the `petArr` in JS
- Then we query for all toys
  - This is like iterating and adding "toys" in JS

This is where `N+1` comes from!

- In JS, we start with our array of data, then do an action for every element
- In SQL, we have to start by querying for that data, then do our actions for every element

### How do we optimize `N+1` queries?

There's a few different ways, which is best depends on the situation

Using a `JOIN`:

```sql
-- This assumes pet type is UNIQUE FK
SELECT * FROM toys JOIN pets ON (pets.type = toys.pet_type);
```

Using an `IN`:

```sql
SELECT * FROM pets; -- "dog", "cat", "parrot", "turtle", "goat"

SELECT * FROM toys WHERE pet_type IN ("dog", "cat", "parrot", "turtle", "goat")
```

Using a subquery:

```sql
SELECT * FROM toys WHERE pet_type IN (
  SELECT type FROM pets
);
```

---

## Indexes

Index on a column === Faster lookup when searching with that column

An index creates an ordered Balanced Tree

- Think of this like a whole extra table
- This table points to our value directly based on our indexed value
- Faster to find our value than checking by id

Let's look at our HW reading's example!

### No Index vs Index

- **_Search_**:
  - O(n) vs O(log n)
- **_Insert/Delete_**:
  - O(1) vs O(log n)

So, only use indexes when we read more than we insert/delete

## So how do I make one?

The best practice naming convention is very descriptive

```sql
CREATE INDEX idx_table_name_column_names ON table_name(column_list);
```

Index on the `cookies` table for `type`, `chocolate`, and `baker_id`:

```sql
CREATE INDEX
    idx_cookies_type_chocolate_baker_id     -- index_name
    ON cookies(type, chocolate, baker_id);  -- table_name(column_list)
```

`PRIMARY KEY` and `UNIQUE` automatically create a single-column index

- This allows us to index columns as we make the table

```sql
CREATE TABLE bakers (
    id INTEGER PRIMARY KEY,
    full_name VARCHAR UNIQUE
);
```

But we can also create a unique index after the table has already been made

```sql
CREATE UNIQUE INDEX idx_bakers_full_name ON bakers(full_name);
```

### `UNIQUE INDEX` - Single vs Multi Column

If a column is `UNIQUE`, then each value in that column must be unique

```sql
-- No duplicate names
full_name VARCHAR UNIQUE
```

If we create a `UNIQUE INDEX`, same as before but we also have an index

```sql
-- No duplicate names & faster lookup on names
CREATE UNIQUE INDEX idx_bakers_full_name ON bakers(full_name);
```

If we create a `UNIQUE INDEX` on multiple columns, then the **_combination_** of values must be unique

```sql
-- Duplicates are allowed individually, but not as a group
CREATE UNIQUE INDEX idx_cookies_baker_id_type_chocolate
  ON cookies(baker_id, type, chocolate);
```

If this data already exists

```sql
baker_id | type | chocolate
--
1 | 'vanilla' | TRUE
2 | 'peanut butter' | TRUE
3 | 'oatmeal' | FALSE
```

Then this data is allowed to be added

```sql
baker_id | type | chocolate
--
1 | 'vanilla' | FALSE
1 | 'peanut butter' | TRUE
3 | 'vanilla' | FALSE
```

But this data is not be allowed to be added

```sql
baker_id | type | chocolate
--
1 | 'vanilla' | TRUE
2 | 'peanut butter' | TRUE
3 | 'oatmeal' | FALSE
```

### Deleting an index

```sql
DROP INDEX idx_cookies_type_chocolate;
```

### Order of an index matters

Most important index first so we can use it on its own

Queries without the first index won't benefit from the index

## Benchmarking

Using an index is the best way to optimize our queries, but how do we know if we need to add one?

To check if a query is using an index, use `EXPLAIN QUERY PLAN`

```sql
EXPLAIN QUERY PLAN SELECT * FROM cookies WHERE type = 'sugar';
```

`SCAN` = not using an index, looking at every row in the table

`SEARCH` = using an index to find the values

To see how long a query takes to run, use `.timer on` in the Sqlite3 cli

## General query benchmarking flow

- Use `.timer on` to time queries

- Use `EXPLAIN QUERY PLAN` to see if a query is using an index

- Determine if it's worth making an index

  - Selecting more than Inserting/Deleting

- Create an index and run the query

- Compare timing benchmark

---

## SQL Injections

Anytime we take user input, there's a chance that user inputs a dangerous command.

So, anytime we take user input, we must `sanitize` it to protect our data.

How do we do that? We don't! We just use tools that do it for us.
