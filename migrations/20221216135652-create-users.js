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
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      isVerifed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      password: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      whichClass: {
        type: Sequelize.INTEGER,
      },
      university: {
        type: Sequelize.STRING,
      },
      Unyshcool: {
        type: Sequelize.STRING,
      }, 
      proffession: {
        type: Sequelize.STRING,
      },
      term: {
        type: Sequelize.STRING,
      },
      planType: {
        type: Sequelize.STRING,
      },
      aid: {
        type: Sequelize.BOOLEAN,
      },
      legacy: {
        type: Sequelize.BOOLEAN,
      },
      activityName: {
        type: Sequelize.STRING,
      },
      applyingFrom: {
        type: Sequelize.STRING,
      },
      testSubmit: {
        type: Sequelize.STRING,
      },
      recentSchool: {
        type: Sequelize.STRING,
      },
      report: {
        type: Sequelize.BOOLEAN,
      },
      hadtests: {
        type: Sequelize.BOOLEAN,
      },
      hobby: {
        type: Sequelize.STRING,
      },
      workExperience: {
        type: Sequelize.STRING,
      },
      addinfo: {
        type: Sequelize.BOOLEAN,
      },
      moreInfo:{
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
