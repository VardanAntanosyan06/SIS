'use strict';

const universities = require("../utils/data/universities").universities

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Universities',universities)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Professors', null, {});
  }
};