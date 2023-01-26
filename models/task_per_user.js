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
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task_per_User',
  });

  
  const Tasks = sequelize.define("Tasks")

  Task_per_User.hasOne(Tasks,{
    foreignKey:"id"
  })


  return Task_per_User;
};