'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UniversityTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UniversityTable.init({
    name: DataTypes.STRING,
    dreamPointMin: DataTypes.INTEGER,
    targetPointMin: DataTypes.INTEGER,
    sefetyPointMin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UniversityTable',
  });
  return UniversityTable;
};