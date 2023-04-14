'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeletedUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeletedUsers.init({
    userId: DataTypes.INTEGER,
    deleteTime: DataTypes.DATE,
    isVerified:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'DeletedUsers',
    timestamps:false
  });

  // const Users = sequelize.define("Users")

  // DeletedUsers.hasOne(Users,{
  //   foreignKey:'userId'
  // })
  
  return DeletedUsers;
};