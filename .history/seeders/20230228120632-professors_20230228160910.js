'use strict';

const professors = require("../utils/data/professors").successMessages

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SuccessMessages',successMessages)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SuccessMessages', null, {});
  }
};
