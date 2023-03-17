'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialAidCounselors', {
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
      applicantName: {
        type: Sequelize.STRING
      },
      ApplicantEmail: {
        type: Sequelize.STRING
      },
      ApplicantGrade: {
        type: Sequelize.STRING
      },
      ApplicantGPA: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.TEXT("long")
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
    await queryInterface.dropTable('FinancialAidCounselors');
  }
};