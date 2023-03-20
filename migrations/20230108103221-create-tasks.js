'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      facultyName: {
        type: Sequelize.STRING
      },
      positionName: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      universityId: {
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};