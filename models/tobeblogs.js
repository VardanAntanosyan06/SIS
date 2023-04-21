'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class toBeBlogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  toBeBlogs.init({
    authorname: DataTypes.STRING,
    title: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    phone: DataTypes.STRING,
    topic: DataTypes.STRING,
    twitter: DataTypes.STRING,
    personalLink: DataTypes.STRING,
    blogs: DataTypes.ARRAY(DataTypes.STRING),
    images: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'toBeBlogs',
  });
  return toBeBlogs;
};