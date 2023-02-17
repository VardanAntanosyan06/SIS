'use strict';

const faculty = require("../utils/data/data").faculty

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SuccessMessages',faculty)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SuccessMessages', null, {});
  }
};
