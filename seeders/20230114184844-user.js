'use strict';

const { testUser } = require("../utils/data/data");

const testUserExample = require("../utils/data/data").testUserExample

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',testUserExample)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
