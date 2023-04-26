'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeactivatedUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeactivatedUsers.init({
    userId: DataTypes.INTEGER,
    deactivateTime: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'DeactivatedUsers',
    timestamps:false
  });
  return DeactivatedUsers;
  
};