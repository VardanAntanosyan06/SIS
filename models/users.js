'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    isVerifed: DataTypes.BOOLEAN, 
    password:DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    country: DataTypes.STRING,
    greade: DataTypes.INTEGER,
    university:DataTypes.STRING,
    BusinessSchool:DataTypes.STRING,
    BusinessManager:DataTypes.STRING,
    term: DataTypes.STRING,
    termOption:DataTypes.STRING,
    planType: DataTypes.STRING,
    aid: DataTypes.BOOLEAN,
    legacy: DataTypes.BOOLEAN,
    area:DataTypes.STRING,
    activityName: DataTypes.STRING, 
    applyingFrom: DataTypes.STRING,
    testSubmit: DataTypes.STRING,
    recentSchool: DataTypes.STRING,
    report: DataTypes.BOOLEAN,
    hadtests: DataTypes.BOOLEAN,
    hobby: DataTypes.STRING,
    workExperience: DataTypes.STRING,
    addinfo: DataTypes.BOOLEAN,
    moreInfo: DataTypes.STRING,
    token:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });

  const Tasks = sequelize.define("Tasks");
  const SubTasks = sequelize.define("SubTasks");
  const Task_per_User = sequelize.define("Task_per_User")
  const SubTask_per_User = sequelize.define("SubTask_per_User")


  Users.belongsToMany(Tasks,{ 
    through:Task_per_User,
    foreignKey:'userId',
    otherKey:'taskId',
    allowNull:true,
})

Users.hasMany(Task_per_User,{
  foreignKey:"userId"
})
Users.belongsToMany(SubTasks,{ 
  through:SubTask_per_User,
  foreignKey:'userId',
  otherKey:'SubTaskId',
  allowNull:true,
})

Users.hasMany(SubTask_per_User,{
foreignKey:"userId"
})

  return Users;
};

