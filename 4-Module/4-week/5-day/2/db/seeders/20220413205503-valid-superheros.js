"use strict";

const { Superhero } = require("../models");

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
    {
        name: "AFWEFFE",
        alias: "eqewtqeadf",
        affiliation: "Avengers",
        heightCm: 160,
        isMutant: true,
        race: "human",
        universe: "Marvel",
        releaseYear: 2000,
    },
    {
        name: "FEFFEEE",
        alias: "qwefgasdf",
        affiliation: "X-Men",
        heightCm: 160,
        isMutant: false,
        race: "qawefqwef",
        universe: "Marvel",
        releaseYear: 2001,
    },
    {
        name: "QQWEQWEQ",
        alias: "vbvbvbvsfg",
        affiliation: "Justice League",
        heightCm: 160,
        isMutant: true,
        race: "human",
        universe: "DC",
        releaseYear: 2000,
    },
    {
        name: "AZXVCVV",
        alias: "gtttttewefa",
        affiliation: "Avengers",
        heightCm: 160,
        isMutant: false,
        race: "efaefef",
        universe: "Marvel",
        releaseYear: 2002,
    },
    {
        name: "EWFSDGQAW",
        alias: "zzzxcqdf",
        affiliation: "X-Men",
        heightCm: 160,
        isMutant: false,
        race: "dfffefafd",
        universe: "Marvel",
        releaseYear: 2003,
    },
];

module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await Superhero.bulkCreate(validSuperheros, {
                validate: true,
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    async down(queryInterface, Sequelize) {
        for (let superheroInfo of validSuperheros) {
            try {
                await Superhero.destroy({
                    where: superheroInfo,
                });
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    },
    // DO NOT MODIFY BELOW (for testing purposes):
    validSuperheros,
};
