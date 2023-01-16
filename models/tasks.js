'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    facultName: DataTypes.STRING,
    positionName: DataTypes.STRING,
    compamyName: DataTypes.STRING,
    universityId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tasks',
  });

  const SubTasks = sequelize.define("SubTasks")

  Tasks.hasMany(SubTasks,{
    foreignKey:"taskId"
  })
  
  return Tasks;
};