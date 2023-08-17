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
    // {
    //     name: "Some band name",
    //     musicians: [
    //         {firstName: "Some first name", lastName: "aoweuhfeu"}
    //     ]
    // }
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

        for (const { name, musicians } of bandMusicians) {
            // for (const data of bandMusicians) {
            //     const { name, musicians } = data
            const band = await Band.findOne({ where: { name } });

            for (const musician of musicians) {
                await band.createMusician(musician);
            }
        }
    },

    // down: async (queryInterface, Sequelize) => {
    //     for (const data of bandMusicians) {
    //         const { name, musicians } = data;
    //         const band = await Band.findOne({ where: { name } });
    //         for (const musician of musicians) {
    //             await band.destroy({
    //                 firstName: musician.firstName,
    //                 lastName: musician.lastName,
    //             });
    //         }
    //     }
    // },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        // //! Single loop
        // for (const { musicians } of bandMusicians) {
        //     await Musician.destroy({ where: musicians });
        // }

        //! Double for loop
        for (const data of bandMusicians) {
            const { musicians } = data;

            for (const musicianObj of musicians) {
                const { firstName, lastName } = musicianObj;

                await Musician.destroy({
                    where: { firstName, lastName },
                });
            }
        }
    },
};
