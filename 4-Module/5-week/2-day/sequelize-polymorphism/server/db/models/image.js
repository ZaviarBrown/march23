"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        getImageable(options) {
            if (!this.imageableType) return Promise.resolve(null);
            const myCustomFunctionName = `get${this.imageableType}`; // getBlogPost OR getUserProfile
            return this[myCustomFunctionName](options);
        }

        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Image.belongsTo(models.UserProfile, {
                foreignKey: "imageableId",
                constraints: false,
            });
            Image.belongsTo(models.BlogPost, {
                foreignKey: "imageableId",
                constraints: false,
            });
        }
    }
    Image.init(
        {
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageableType: {
                type: DataTypes.ENUM("UserProfile", "BlogPost"),
            },
            imageableId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Image",
        }
    );
    return Image;
};
