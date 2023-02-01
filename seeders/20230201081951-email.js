'use strict';

const emails = require("../utils/data/data").emails

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserEmails',emails)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserEmails', null, {});
  }
};
