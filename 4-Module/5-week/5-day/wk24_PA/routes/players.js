const express = require("express");
const router = express.Router();

const { Player } = require("../db/models");

router.get("/", async (req, res) => {
    let { firstName, number, page, size } = req.query;

    const where = {};
    if (firstName && firstName !== "") {
        where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
    } else if (firstName === "") {
        res.status(400);
        return res.json({
            errors: [{ message: "firstName filter should not be empty" }],
        });
    }

    if (number) {
        if (!isNaN(Number(number)) && Number(number) >= 0) {
            where.number = parseInt(number);
        } else {
            res.status(400);
            return res.json({
                errors: [
                    {
                        message:
                            "number filter should be a number greater or equal to 0",
                    },
                ],
            });
        }
    }

    // page isNaN || page < 0 => page = 1

    // size > 10 => size = 10
    // size isNan || size < 0 => size = 2

    const pagination = {};

    if (page && !isNaN(Number(page))) {
        page = Number(page);
    } else {
        page = 1;
    }

    if (size && !isNaN(Number(size))) {
        size = Number(size);

        if (size > 10) size = 10;
    } else {
        size = 2;
    }

    if (size) {
        pagination.limit = size;
    }

    if (page) {
        pagination.offset = size * (page - 1);
    }

    const players = await Player.findAll({
        where,
        ...pagination,
    });
    return res.json({
        players,
        page,
        size,
    });
});

module.exports = router;
