const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../../../../weekly-challenges/module-13/ecommerce-ORM-back/config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
