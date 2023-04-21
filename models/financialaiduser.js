'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialAidUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialAidUser.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    school: DataTypes.STRING,
    grade: DataTypes.STRING,
    gpa: DataTypes.STRING,
    counselorName: DataTypes.STRING,
    counselorEmail: DataTypes.STRING,
    question1: DataTypes.STRING,
    question2: DataTypes.STRING,
    file1: DataTypes.ARRAY(DataTypes.STRING),
    file2: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'FinancialAidUser',
  });
  return FinancialAidUser;
};