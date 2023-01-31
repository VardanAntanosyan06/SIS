'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GreetingMessages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GreetingMessages.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GreetingMessages',
    timestamps: false
  });
  return GreetingMessages;
};