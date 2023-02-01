'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserEmails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      password: {
        type: Sequelize.STRING,
      },
      role : {
        type: Sequelize.STRING,
        defaultValue:"Secondary"
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserEmails');
  }
};