
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SubTasks = sequelize.define("SubTasks")
  const Tasks_per_User = sequelize.define("Task_per_User")
  const Users = sequelize.define("Users")
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
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    facultName: DataTypes.STRING,
    positionName: DataTypes.STRING,
    compamyName: DataTypes.STRING,
    universityId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tasks',
  });

  
  Tasks.hasMany(SubTasks,{
    foreignKey:"taskId"
  })


  Tasks.hasMany(Tasks_per_User,{
    foreignKey:"taskId"
  })

  Tasks.belongsToMany(Users,{
   through:Tasks_per_User,foreignKey:"taskId" ,otherKey:"userId"
  })

  return Tasks;
};