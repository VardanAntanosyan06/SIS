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
    phone: DataTypes.STRING,
    age: DataTypes.DATE,
    country: DataTypes.STRING,
    grade: DataTypes.INTEGER,
    university:DataTypes.STRING,
    academicProgram:DataTypes.STRING,
    study:DataTypes.STRING,
    termOption:DataTypes.STRING,
    planType: DataTypes.STRING,
    aid: DataTypes.BOOLEAN,
    legacy: DataTypes.BOOLEAN,
    area:DataTypes.STRING,
    applyingFrom: DataTypes.BOOLEAN,
    testSubmit: DataTypes.STRING,
    recentSchool: DataTypes.STRING,
    achievements:DataTypes.BOOLEAN,
    admission:DataTypes.BOOLEAN,
    activityName: DataTypes.STRING, 
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
  const UserEmails = sequelize.define("UserEmails")


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


Users.hasMany(UserEmails,{
  foreignKey:"userId"
})

  return Users;
};

