'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('toBeBlogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      authorname: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      userEmail: {
        type: Sequelize.STRING
      },
      contactEmail: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      personalLink: {
        type: Sequelize.STRING
      },
      blogs: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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
    await queryInterface.dropTable('toBeBlogs');
  }
};