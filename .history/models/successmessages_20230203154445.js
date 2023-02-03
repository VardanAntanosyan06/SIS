'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuccessMessages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuccessMessages.init({
    text: DataTypes.STRING(1234)m
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SuccessMessages',
    timestamps: false
  });
  return SuccessMessages;
};