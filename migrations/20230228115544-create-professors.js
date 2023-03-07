"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Professors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      textPart1: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT("long"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Professors");
  },
};
