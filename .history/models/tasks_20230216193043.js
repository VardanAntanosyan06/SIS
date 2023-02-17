'use strict';
const {  Model } = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  const SubTasks = sequelize.define("SubTasks")
  const Task_per_User = sequelize.define("Task_per_User")
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
    facultyName: DataTypes.STRING,
    positionName: DataTypes.STRING,
    companyName: DataTypes.STRING,
    universityId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tasks',
    timestamps: false
  });

  
  Tasks.hasMany(SubTasks,{
    foreignKey:"taskId"
  })

  Tasks.belongsToMany(Users,{ 
    through:Task_per_User,
    foreignKey:'taskId',
    otherKey:'userId',
    allowNull:true,
})

 Tasks.hasMany(Task_per_User,{
  foreignKey:"taskId"
 })
 const Faculty = sequelize.define("Faculty");

  Tasks.hasOne(Tasks,{
    foreignKey:"facultyName"
  })
  return Tasks;
};