"use strict";

const { Tree, Insect } = require("../models");

const data = [
    {
        insect: "Western Pygmy Blue Butterfly",
        trees: ["General Sherman", "General Grant", "Lincoln", "Stagg"],
    },
    {
        insect: "Patu Digua Spider",
        trees: ["Stagg"],
    },
];

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        for (const { insect, trees } of data) {
            const theInsect = await Insect.findOne({ where: { name: insect } });

            for (const tree of trees) {
                const theTree = await Tree.findOne({ where: { tree } });

                theInsect.addTree(theTree);
            }
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
