'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notifications.init({
    userId: DataTypes.INTEGER,
    notificationTitle:DataTypes.STRING,
    notification: DataTypes.STRING,
    read: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Notifications',
  });
  return Notifications;
};