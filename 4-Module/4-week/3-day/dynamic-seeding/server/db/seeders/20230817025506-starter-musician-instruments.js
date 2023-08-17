"use strict";

const { Musician, Instrument } = require("../models");
const { Op } = require("sequelize");

const musicianInstruments = [
    {
        musician: { firstName: "Adam", lastName: "Appleby" },
        instruments: [{ type: "piano" }, { type: "guitar" }],
    },
    {
        musician: { firstName: "Anton", lastName: "Martinovic" },
        instruments: [{ type: "piano" }, { type: "bass" }],
    },
    {
        musician: { firstName: "Wilson", lastName: "Holt" },
        instruments: [{ type: "cello" }],
    },
    {
        musician: { firstName: "Marine", lastName: "Sweet" },
        instruments: [{ type: "saxophone" }],
    },
    {
        musician: { firstName: "Georgette", lastName: "Kubo" },
        instruments: [
            { type: "drums" },
            { type: "trumpet" },
            { type: "saxophone" },
        ],
    },
    {
        musician: { firstName: "Aurora", lastName: "Hase" },
        instruments: [{ type: "violin" }, { type: "cello" }],
    },
    {
        musician: { firstName: "Trenton", lastName: "Lesley" },
        instruments: [{ type: "piano" }],
    },
    {
        musician: { firstName: "Camila", lastName: "Nenci" },
        instruments: [{ type: "piano" }],
    },
    {
        musician: { firstName: "Rosemarie", lastName: "Affini" },
        instruments: [{ type: "piano" }, { type: "violin" }],
    },
    {
        musician: { firstName: "Victoria", lastName: "Cremonesi" },
        instruments: [{ type: "violin" }],
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

        for (const data of musicianInstruments) {
            const { musician, instruments } = data;

            // const theMusician = await Musician.findOne({ where: { musician } });
            const theMusician = await Musician.findOne({
                where: {
                    firstName: musician.firstName,
                    lastName: musician.lastName,
                },
            });

            for (const eachInstrument of instruments) {
                const theInstrument = await Instrument.findOne({
                    where: {
                        type: eachInstrument.type,
                    },
                });

                theMusician.addInstrument(theInstrument);
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

        for (const data of musicianInstruments) {
            const { musician, instruments } = data;

            // const theMusician = await Musician.findOne({ where: { musician } });
            const theMusician = await Musician.findOne({
                where: {
                    firstName: musician.firstName,
                    lastName: musician.lastName,
                },
            });

            for (const eachInstrument of instruments) {
                const theInstrument = await Instrument.findOne({
                    where: {
                        type: eachInstrument.type,
                    },
                });

                theMusician.removeInstrument(theInstrument);
            }
        }

        // for (const { musician, instruments } of musicianInstruments) {
        //     const theMusician = await Musician.findOne({ where: musician });

        //     const allInstruments = await Instrument.findAll({
        //         where: {
        //             [Op.or]: instruments,
        //         },
        //     });

        //     await theMusician.removeInstruments(allInstruments);
        // }
    },
};
