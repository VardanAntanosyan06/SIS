'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taskId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      timePoints: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      startDate: {
         type: Sequelize.DATE
       },
      deadline: {
        type: Sequelize.DATE
       },
       isFree: {
        type:Sequelize.DATE
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
    await queryInterface.dropTable('Calendars');
  }
};