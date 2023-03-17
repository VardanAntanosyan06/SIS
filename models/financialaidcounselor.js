'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialAidCounselor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialAidCounselor.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    school: DataTypes.STRING,
    applicantName: DataTypes.STRING,
    ApplicantEmail: DataTypes.STRING,
    ApplicantGrade: DataTypes.STRING,
    ApplicantGPA: DataTypes.STRING,
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FinancialAidCounselor',
  });
  return FinancialAidCounselor;
};