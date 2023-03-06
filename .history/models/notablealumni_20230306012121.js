'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotableAlumni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotableAlumni.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    univeristyId:DataTypes.I
  }, {
    sequelize,
    modelName: 'NotableAlumni',
    timestamps:false
  });
  return NotableAlumni;
};