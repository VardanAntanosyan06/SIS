'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dashboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dashboard.init({
    DaysIntraining: DataTypes.INTEGER,
    totalPosints: DataTypes.INTEGER,
    completedTask: DataTypes.INTEGER,
    ramaingDays: DataTypes.INTEGER,
    remaningEfort: DataTypes.INTEGER,
    progressCategory1: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dashboard',
    timestamps: false
  });
  return Dashboard;
};