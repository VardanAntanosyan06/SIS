'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TasksNotFree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TasksNotFree.init({
    TaskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    status:DataTypes.STRING,
    position: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TasksNotFree',
    timestamps: false
  });
  
  const Tasks = sequelize.define("Tasks")
  const SubTasks = sequelize.define("SubTasks")


  TasksNotFree.hasMany(SubTasks,{
    foreignKey:"taskId"
  })
  TasksNotFree.hasMany(Tasks,{
    foreignKey:"id"
  })

  return TasksNotFree;
};