'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserEmails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserEmails.init({
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    userId: DataTypes.INTEGER,
    isVerified: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    token
  }, {
    sequelize,
    modelName: 'UserEmails',
    timestamps:false
  });

  const UserModel = sequelize.define("Users")

  UserEmails.hasOne(UserModel,{
    foreignKey : "id"
  })
  return UserEmails;
};