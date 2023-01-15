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
      DateOfAddTask: {
        type: Sequelize.DATE
      },
      statusOfTask: {
        type: Sequelize.STRING
      },
      timePoints: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      deadline: {
        type: Sequelize.DATE
       },
       startDate: {
         type: Sequelize.DATE
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