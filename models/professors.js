'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professors.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    img: DataTypes.STRING,
    textPart1:DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professors',
    timestamps: false
  });
  return Professors;
};