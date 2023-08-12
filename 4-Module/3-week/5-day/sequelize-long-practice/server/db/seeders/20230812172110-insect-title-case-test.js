"use strict";

const { Insect } = require("../models");

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
        await Insect.bulkCreate(
            [
                {
                    name: "Zaviar Brown",
                },
                {
                    name: "Itsy bitsy Spider",
                },
            ],
            { validate: true }
        );

        // await queryInterface.bulkInsert("Insects", [
        //     {
        //         name: "Zaviar Brown",
        //     },
        //     {
        //         name: "Itsy bitsy Spider",
        //     },
        // ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Insects", {
            name: ["Zaviar Brown", "Itsy bitsy Spider"],
        });
    },
};





