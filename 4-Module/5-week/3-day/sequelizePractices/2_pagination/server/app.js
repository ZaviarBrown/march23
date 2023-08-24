// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require("dotenv").config();
require("express-async-errors");

// Import the models used in these routes - DO NOT MODIFY
const { Musician, Band, Instrument } = require("./db/models");

// Express using json - DO NOT MODIFY
app.use(express.json());

app.get("/musicians", async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    let { page, size } = req.query;

    if (page) {
        page = Number(page);
    } else {
        page = 1;
    }
    if (size) {
        size = Number(size);
    } else {
        size = 5;
    }

    const pagination = {};

    if (size >= 1 && page >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }

    // Query for all musicians
    // Include attributes for `id`, `firstName`, and `lastName`
    // Include associated bands and their `id` and `name`
    // Order by musician `lastName` then `firstName`

    // console.log(pagination);

    const query = {
        order: [["lastName"], ["firstName"]],
        attributes: ["id", "firstName", "lastName"],
        include: [
            {
                model: Band,
                attributes: ["id", "name"],
            },
        ],
        // add limit key-value to query
        // add offset key-value to query
        ...pagination,
    };

    const musicians = await Musician.findAll(query);

    /**
     *
     * before = {order: [], attributes: []}
     *
     * {order: [], attributes: [], ...pagination}
     *
     * after = {order: [], attributes: [], limit: num, offset: num}
     */

    res.json(musicians);
});

// BONUS: Pagination with bands
app.get("/bands", async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    let { page, size } = req.query;

    // Same as the previous if statement method, just fancier
    page = page === undefined ? 1 : parseInt(page);
    size = size === undefined ? 3 : parseInt(size);

    const pagination = {};
    if (page >= 1 && size >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }

    // Query for all bands
    // Include attributes for `id` and `name`
    // Include associated musicians and their `id`, `firstName`, and `lastName`
    // Order by band `name` then musician `lastName`
    const bands = await Band.findAll({
        order: [["name"], [Musician, "lastName"]],
        attributes: ["id", "name"],
        include: [
            {
                model: Musician,
                attributes: ["id", "firstName", "lastName"],
            },
        ],
        // add limit key-value to query
        // add offset key-value to query
        ...pagination,
    });

    res.json(bands);
});

// ADVANCED BONUS: Reduce Pagination Repetition
//! This is used in the "/instruments" route below
// Creates a middleware function with specified default values for page and size
// Can be invoked in any route that implements pagination
// The outer function can receive different defaultSize and defaultPage values
// The inner function adds a pagination key to the req object
// The pagination object has keys for offset and limit
// Allows the route to spread the created object to implement pagination
// i.e., `...req.pagination` in the Sequelize query
const createPaginationMiddleware = ({ defaultSize = 5, defaultPage = 1 }) => {
    return (req, res, next) => {
        let { page, size } = req.query;

        page = page === undefined ? defaultPage : parseInt(page);
        size = size === undefined ? defaultSize : parseInt(size);

        const pagination = {};
        if (page >= 1 && size >= 1) {
            pagination.limit = size;
            pagination.offset = size * (page - 1);
        }

        req.pagination = pagination;
        next();
    };
};

// BONUS: Pagination with instruments
//! This has been implemented using the above middleware function
app.get(
    "/instruments",
    createPaginationMiddleware({ defaultSize: 4 }),
    async (req, res, next) => {
        // Query for all instruments
        // Include attributes for `id` and `type`
        // Include associated musicians and their `id`, `firstName` and `lastName`
        // Omit the MusicianInstruments join table attributes from the results
        // Include each musician's associated band and their `id` and `name`
        // Order by instrument `type`, then band `name`, then musician `lastName`
        const instruments = await Instrument.findAll({
            order: [["type"], [Musician, Band, "name"], [Musician, "lastName"]],
            attributes: ["id", "type"],
            include: [
                {
                    model: Musician,
                    attributes: ["id", "firstName", "lastName"],
                    // Omit the join table (MusicianInstruments) attributes
                    through: { attributes: [] },
                    include: [
                        {
                            model: Band,
                            attributes: ["id", "name"],
                        },
                    ],
                },
            ],
            // add limit key-value to query
            // add offset key-value to query
            //! This comes from the custom middleware
            ...req.pagination,
        });

        res.json(instruments);
    }
);

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
    res.json({
        message: "API server is running",
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
