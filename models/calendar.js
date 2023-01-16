'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Calendar.init({
    taskId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    timePoints: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    startDate:DataTypes.DATE,
    deadline:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Calendar',
  });

  const Tasks = sequelize.define("Tasks")

  Calendar.hasMany(Tasks,{
    foreignKey:"taskId"
  })
  
  return Calendar;
};