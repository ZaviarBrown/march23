"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Airplane extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Airplane.init(
        {
            airlineCode: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [2, 2],
                    isUppercase: true,
                },
            },
            flightNumber: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 4],
                    isNumeric: true,
                },
            },
            inService: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            maxNumPassengers: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 2,
                    max: 853,
                },
            },
            currentNumPassengers: {
                type: DataTypes.INTEGER,
                validate: {
                    min: 0,
                    max: 853,
                    mustNotBeGreaterThanMaxNum(currNum) {
                        if (currNum > this.maxNumPassengers) {
                            throw new Error(
                                "Can't be greater than maxNumPassengers"
                            );
                        }
                    },
                    nullIfNotInService(currNum) {
                        if (this.inService === false && currNum !== null) {
                            throw new Error(
                                "currNumPassengers must be null because inService is false"
                            );
                        }
                    },
                },
            },
            firstFlightDate: {
                type: DataTypes.DATE,
                validate: {
                    isAfter: "2019-12-31",
                    isBefore: "2022-01-01",
                },
            },
        },
        {
            sequelize,
            modelName: "Airplane",
        }
    );
    return Airplane;
};
