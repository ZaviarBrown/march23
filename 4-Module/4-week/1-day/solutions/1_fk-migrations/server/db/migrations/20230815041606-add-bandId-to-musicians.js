"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn("Musicians", "bandId", {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "Bands", // TABLE name
                key: "id", // optional: Sequelize will auto use "id" if "key" is not provided
            },
            onDelete: "CASCADE",
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn("Musicians", "bandId");
    },
};
