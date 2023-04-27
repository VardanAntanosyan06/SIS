'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('timeTasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_id: {
        type: Sequelize.INTEGER
      },
      taskSpentWeek: {
        type: Sequelize.STRING
      },
      taskSpentDays : {
        type: Sequelize.INTEGER,
      },
      point: {
        type: Sequelize.FLOAT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('timeTasks');
  }
};
