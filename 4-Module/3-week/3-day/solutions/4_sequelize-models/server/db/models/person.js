'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Person.init({
    name: {
        type: DataTypes.STRING,
        validate: {
            mustStartWithCapital(el) {
                if (el[0].toUpperCase() !== el[0]) {
                    throw new Error("Whatever")
                }
                else return
            }
        }
    }
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};