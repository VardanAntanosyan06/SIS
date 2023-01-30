'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SubTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubTasks.init({
    id:{type:DataTypes.INTEGER,primaryKey:true},
    taskId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    points: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SubTasks',
    timestamps: false
  });
  const Calendar = sequelize.define("Calendar")
  const Tasks = sequelize.define("Tasks")
 

  SubTasks.hasOne(Tasks,{
    foreignKey:"id"
  })
  const SubTask_per_User = sequelize.define("SubTask_per_User")
  const Users = sequelize.define("Users")

  SubTasks.belongsToMany(Users,{ 
    through:SubTask_per_User,
    foreignKey:'subTaskId',
    otherKey:'userId',
    allowNull:true,
})

 SubTasks.hasMany(SubTask_per_User,{
  foreignKey:"subTaskId"
 })


  return SubTasks;
};