# Relationships problems are complicated...

## Sequelize Foreign Keys - Migrations

In SQL, we would say `FOREIGN KEY` to indicate a relationship between tables.

In Sequelize, we instead have a `references` object on the migration

Like with SQL, reference is made on the migration with the FK, not the PK

- This indicates relationships as a _two way_ connection

```js
// on a migration for a one to many for a user
// ie: tweets/posts/appointments
userId: {
  type: Sequelize.INTEGER,
  references: {
    model: 'Users', // the TABLE name, not Model name
    key: 'id', // the column on the other Table
  },
	onDelete: 'CASCADE'
};
```

Note that the naming is confusing here. The `model` key points to a Table, not a Model

For a many-to-many, it's the exact same syntax, except on the joins table

- Put both foreign keys on the joins table

---

## Sequelize Associations - Models

Before we get into syntax, we have to understand how these relationships connect to each other

[Intro to Associations](https://open.appacademy.io/learn/js-py---pt-mar-2023-online/week-22---express-and-sequelize-pt--ii/intro-to-associations)
is such a good demonstration of how these associations work

Quick Reference:

- One-To-One
  - A has one B
  - B belongs to A
- One-To-Many
  - A has many B
  - B belongs to A
- Many-To-Many
  - A belongs to many B
  - B belongs to many A

### We've been ignoring the `static associate(models)` function, but now it's time to use it!

When we define an association on a model, we're declaring that model as the `source`

The first argument passed to the method is the `target`, and the provided FK will be defined on the targeted model

- Defining the foreign key is optional, but I always like to do it
  - Sequelize will automatically define it on the target if no FK is provided

### One-To-One

```js
// User Model File
class User extends Model {
  static associate(models) {
    User.hasOne(models.Preference, { foreignKey: "userId" });
  }
}

// Preferences Model File
class Preferences extends Model {
  static associate(models) {
    Preferences.belongsTo(models.User, { foreignKey: "userId" });
  }
}
```

### One-To-Many

```js
// Person Model File
class Person extends Model {
  static associate(models) {
    Person.hasMany(models.Job, {
      foreignKey: "personId",
      onDelete: "CASCADE",
      hooks: true,
    });
  }
}

// Job Model File
class Job extends Model {
  static associate(models) {
    Job.belongsTo(models.Person, { foreignKey: "personId" });
  }
}
```

### Many-To-Many

```js
// Book Model File
class Book extends Model {
  static associate(models) {
    Book.belongsToMany(models.Reader, {
      through: models.BookReader,
      foreignKey: "bookId",
      otherKey: "readerId",
    });
  }
}

// Reader Model File
class Reader extends Model {
  static associate(models) {
    Reader.belongsToMany(models.Book, {
      through: models.BookReader,
      foreignKey: "readerId",
      otherKey: "bookId",
    });
  }
}
```

## Which Associations Are Required? Source vs Target

All associations are _one way_ connections

You only need to define the association on the source

- Depending on the situation, either model can be the source

For example, in a One-To-Many Person-Jobs association

- Define only on Person if Person is always the source

  - Jobs is the target

- Define only on Jobs if Jobs is always the source

  - Person is the target

- Define on Jobs and Person if both can be the source

  - Both are also the target

---

# Use And Abuse Your Relationships 🥵

We can query for related data without associations through normal means

[`findOne` / `findAll` / `findByPk`] + `where` can find anything we need!

However, utilizing our associations makes things even easier!

## The automatic `get` method

If a `belongsTo()` or `hasOne()` association has been created, like so

```js
class Job extends Model {
  static associate(models) {
    Job.belongsTo(models.Person, { foreignKey: "personId" });
  }
}
```

Sequelize automatically creates a `instance.getModelName()` for us!

- The ModelName will be singular

```js
// getting a Job instance by id
const job = await Job.findOne({ where: { id } });

// finding the Person instance that has that job
const personWithJob = await job.getPerson();
```

If a `hasMany()` or `belongsToMany()` association has been created

```js
class Person extends Model {
  static associate(models) {
    Person.hasMany(models.Job, {
      foreignKey: "personId",
      onDelete: "CASCADE",
      hooks: true,
    });
  }
}
```

Sequelize creates the same method, except the model name is plural!

- The results will be returned to us in an array

```js
// getting a Person instance by id
const person = await Person.findOne({ where: { id } });

// finding all Job instances but less cool
const allJobsLameWay = await Job.findAll({ where: { personId: person.id } });

// finding all the Job instances that the person has
const allJobsForAPerson = await person.getJobs();
```

## `include`

When querying for an instance, we can use `include` to also receive associated data

- `belongsTo()` or `hasOne()` = singular model name
- `hasMany()` and `belongsToMany()` = plural model name

```js
// belongsTo() or hasOne()
const job = await Job.findOne({ where: { id }, include: Person });

// hasMany() or belongsToMany()
const person = await Person.findOne({ where: { id }, include: Jobs });
```

This is how the returned data could look

```js
job = {
  id,
  title,
  Person: {
    id,
    name,
  },
};

person = {
  id,
  name,
  Jobs: [
    {
      id,
      title,
    },
    {
      id,
      title,
    },
  ],
};
```

## Eager loading vs Lazy loading

Eager loading

- Loading all data at once
- Typically faster
- Would use `include`

Lazy loading

- Loading data only once it's needed
- More optimal for conditional loading
- Would use `getModelName()`

---

## Inserting Data With Associations

Sequelize also automatically creates methods for us to insert data with

## `instance.createModelName()`

Creates data with an association to the instance

```js
const person = await Person.findOne({ where: { name: "Exa Mple" } });
// returns Person: {
// id: 1,
// name: "Exa Mple"
// }

await person.createJob({ title: "Manager" });
```

## `instance.addModelName()`

Creates an association for data that's already been created

Particularly useful in Many-To-Many situations

```js
// Create or find instances of readers and books
const reader1 = await Reader.create({ userName: "SuperReader109" });
const reader2 = await Reader.create({ username: "Reader McReady" });

const book1 = await Book.create({ title: "The Wind in the Willows" });
const book2 = await Book.create({ title: "Where the Wild Things Are" });

// Add association between a single reader and book
reader1.addBook(book1);

// Add association between one book and multiple readers
book2.addReaders([reader1, reader2]);
```

## `Model.create()`

We also can use the `Model.create()` method we already know, with some extra options

When creating the new data, we can create any associated data at the same time

```js
await Person.create({
  name: "Exa Mple",
  Jobs: [{ title: "Manager"}, {title: "Software Engineer" }],
});
```

This will create a person, two jobs, and the appropriate association between them.
