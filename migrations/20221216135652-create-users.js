"use strict";

const { STRING } = require("sequelize");

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
      phone: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.DATE,
      },
      country: {
        type: Sequelize.STRING,
      },
      grade: {
        type: Sequelize.INTEGER,
      },
      university: {
        type: Sequelize.STRING,
      },
      academicProgramFirst: {
        type: Sequelize.STRING,
      },
      academicProgramSecond: {
        type: Sequelize.STRING,
      },
      academicProgramThird: {
        type: Sequelize.STRING,
      },
      academicProgramFourth : {
        type: Sequelize.STRING
      },
      study: {
        type: Sequelize.STRING,
      },
      termOption: {
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
      area: {
        type: Sequelize.STRING,
      },
      applyingFrom: {
        type: Sequelize.BOOLEAN,
      },
      testSubmit: {
        type: Sequelize.STRING,
      },
      recentSchool: {
        type: Sequelize.STRING,
      },
      achievements: {
        type: Sequelize.BOOLEAN,
      },
      admission: {
        type: Sequelize.BOOLEAN,
      },
      workExperience: {
        type: Sequelize.STRING,
      },
      addinfo: {
        type: Sequelize.BOOLEAN,
      },
      moreInfo: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
        defaultValue:
          "http://drive.google.com/uc?export=view&id=1T4h9d1wyGy-apEyrTW_D6C1UvdLSE166",
      },
      trainingDate : {
        type: Sequelize.DATE,
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
