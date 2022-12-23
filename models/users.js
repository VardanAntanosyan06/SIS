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
    whichClass: DataTypes.INTEGER,
    term: DataTypes.STRING,
    planType: DataTypes.STRING,
    aid: DataTypes.BOOLEAN,
    legacy: DataTypes.BOOLEAN,
    activityName: DataTypes.STRING,
    applyingFrom: DataTypes.STRING,
    testSubmit: DataTypes.STRING,
    school: DataTypes.STRING,
    report: DataTypes.BOOLEAN,
    reportDescription: DataTypes.STRING,
    hadtests: DataTypes.BOOLEAN,
    hobby: DataTypes.STRING,
    workExperience: DataTypes.STRING,
    addinfo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};

