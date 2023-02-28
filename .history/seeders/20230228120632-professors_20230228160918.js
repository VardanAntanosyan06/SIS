'use strict';

const professors = require("../utils/data/professors").professors

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SuccessMessages',professors)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SuccessMessages', null, {});
  }
};
