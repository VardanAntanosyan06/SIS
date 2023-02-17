'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faculty.init({
    facultyName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Faculty',
    timestamps: false

  });

  const Tasks = sequelize.define("Tasks");

  Faculty.bilon(Tasks,{
    foreignKey:"facultyName"
  })
  return Faculty;
};