'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dashboards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DaysIntraining: {
        type: Sequelize.INTEGER
      },
      totalPosints: {
        type: Sequelize.INTEGER
      },
      completedTask: {
        type: Sequelize.INTEGER
      },
      ramaingDays: {
        type: Sequelize.INTEGER
      },
      remaningEfort: {
        type: Sequelize.INTEGER
      },
      progressCategory1: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Dashboards');
  }
};