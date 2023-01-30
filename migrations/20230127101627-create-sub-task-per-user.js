'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SubTask_per_Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subTaskId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      description:{
        type: Sequelize.STRING,
        allowNull:true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SubTask_per_Users');
  }
};