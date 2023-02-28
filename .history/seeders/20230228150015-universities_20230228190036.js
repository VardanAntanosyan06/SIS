'use strict';

const universities = require("../utils/data/").professors

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Professors',professors)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Professors', null, {});
  }
};