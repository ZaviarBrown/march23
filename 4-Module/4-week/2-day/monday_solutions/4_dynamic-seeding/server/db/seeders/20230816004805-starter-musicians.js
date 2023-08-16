"use strict";

const { Band, Musician } = require("../models");

const bandMusicians = [
    {
        name: "The Falling Box",
        musicians: [
            { firstName: "Adam", lastName: "Appleby" },
            { firstName: "Anton", lastName: "Martinovic" },
            { firstName: "Wilson", lastName: "Holt" },
        ],
    },
    {
        name: "America The Piano",
        musicians: [
            { firstName: "Marine", lastName: "Sweet" },
            { firstName: "Georgette", lastName: "Kubo" },
        ],
    },
    {
        name: "Loved Autumn",
        musicians: [{ firstName: "Aurora", lastName: "Hase" }],
    },
    {
        name: "Playin Sound",
        musicians: [
            { firstName: "Trenton", lastName: "Lesley" },
            { firstName: "Camila", lastName: "Nenci" },
        ],
    },
    {
        name: "The King River",
        musicians: [
            { firstName: "Rosemarie", lastName: "Affini" },
            { firstName: "Victoria", lastName: "Cremonesi" },
        ],
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        for (const data of bandMusicians) {
            // bandMusicians[i].name
            const { name, musicians } = data;

            const currBand = await Band.findOne({ where: { name } });

            for (const person of musicians) {
                currBand.createMusician(person);
            }
        }
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        for (const data of bandMusicians) {
            const { musicians } = data;

            await Musician.destroy({ where: musicians });
        }
    },
};
