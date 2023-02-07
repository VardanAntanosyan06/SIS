'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task_per_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task_per_User.init({
    taskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status:DataTypes.STRING,
    startDate:DataTypes.DATE,
    deadlineAtWeek:DataTypes.STRING,
    deadline:DataTypes.DATE,
    position:DataTypes.INTEGER,
    point:DataTypes.INTEGER,
    description:DataT
  }, {
    sequelize,
    modelName: 'Task_per_User',
  });

  
  const Tasks = sequelize.define("Tasks")
  const SubTasks = sequelize.define("SubTasks")
  const Users = sequelize.define("Users")
 Task_per_User.belongsTo(Users,{
  foreignKey:"id"
 })
 Task_per_User.belongsTo(Tasks,{
  foreignKey:"id"
 })
//  Task_per_User.hasMany(SubTasks,{
//   foreignKey:"taskId"
//  })
  return Task_per_User;
};