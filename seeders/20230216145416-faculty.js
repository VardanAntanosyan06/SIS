'use strict';

const faculty = require("../utils/data/data").faculty

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Faculties',faculty)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Faculties', null, {});
  }
};
