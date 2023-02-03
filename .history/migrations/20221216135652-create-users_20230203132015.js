"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {DataTypes.STRING}, 
      phone: DataTypes.STRING,
      age: DataTypes.DATE,
      country: DataTypes.STRING,
      grade: DataTypes.INTEGER,
      university:DataTypes.STRING,
      academicProgram:DataTypes.STRING,
      study:DataTypes.STRING,
      termOption:DataTypes.STRING,
      planType: DataTypes.STRING,
      aid: DataTypes.BOOLEAN,
      legacy: DataTypes.BOOLEAN,
      area:DataTypes.STRING,
      applyingFrom: DataTypes.BOOLEAN,
      testSubmit: DataTypes.STRING,
      recentSchool: DataTypes.STRING,
      activityName: DataTypes.STRING, 
      workExperience: DataTypes.STRING,
      addinfo: DataTypes.BOOLEAN,
      moreInfo: DataTypes.STRING,
      token:DataTypes.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
