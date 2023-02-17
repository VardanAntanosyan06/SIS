'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback_of_Task_per_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feedback_of_Task_per_User.init({
    taskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    feedback: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'feedback_of_Task_per_User',
  });

  const Task_per_Users = sequelize.define("Task_per_Users")

  feedback_of_Task_per_User.bil(Task_per_Users,{
    foreignKey:"id"
   })
  return feedback_of_Task_per_User;
};