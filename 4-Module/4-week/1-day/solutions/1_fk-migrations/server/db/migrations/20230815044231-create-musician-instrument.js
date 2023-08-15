"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("MusicianInstruments", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            musicianId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "Musicians" },
            },
            instrumentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "Instruments" },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("MusicianInstruments");
    },
};
