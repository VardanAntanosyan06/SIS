'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubTask_per_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubTask_per_User.init({
    subTaskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    description:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SubTask_per_User',
  });

  const SubTasks = sequelize.define("SubTasks")
  const Users = sequelize.define("Users")

  SubTask_per_User.belongsTo(SubTasks,{
    foreignKey:"subTaskId"
  })
  SubTask_per_User.belongsTo(Users,{
    foreignKey:"id"
  })
  
  return SubTask_per_User;
};