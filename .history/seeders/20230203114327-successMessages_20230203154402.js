'use strict';

const successMessages = require("../utils/data/data").successMessages

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserEmails',emails)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserEmails', null, {});
  }
};