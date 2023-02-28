'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Universities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      history: {
        type: Sequelize.TEXT("long")
      },
      facts: {
        type: Sequelize.ARRAY(Sequelize.TEXT("long"))
      },
      alumni: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      advice: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      img: {
        type : Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Universities');
  }
};