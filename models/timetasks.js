'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timeTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  timeTasks.init({
    task_id: DataTypes.INTEGER,
    taskSpentWeek: DataTypes.STRING,
    taskSpentDays: DataTypes.STRING,
    point: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'timeTasks',
    timestamps: false

  });
  return timeTasks;
};