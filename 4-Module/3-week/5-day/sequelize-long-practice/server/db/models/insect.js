"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Insect extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Insect.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    mustBeTitleCased(insectName) {
                        const fullName = insectName.split(" ");

                        for (const eachName of fullName) {
                            if (eachName[0] !== eachName[0].toUpperCase()) {
                                throw new Error("Wahahahaaaa");
                            }
                        }
                    },
                },
            },
            description: DataTypes.STRING,
            territory: DataTypes.STRING,
            fact: DataTypes.STRING,
            millimeters: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: "Insect",
        }
    );
    return Insect;
};
