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
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'timeTasks',
  });
  return timeTasks;
};