'use strict';

const Admins = require("../utils/data/admin").Admins

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Admins',Admins)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};