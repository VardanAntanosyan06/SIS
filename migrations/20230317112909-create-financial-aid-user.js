'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialAidUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
      },
      gpa: {
        type: Sequelize.STRING
      },
      counselorName: {
        type: Sequelize.STRING
      },
      counselorEmail: {
        type: Sequelize.STRING
      },
      question1: {
        type: Sequelize.TEXT("long")
      },
      question2: {
        type: Sequelize.TEXT("long")
      },
      file1: {
        type: Sequelize.STRING
      },
      file2: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FinancialAidUsers');
  }
};