'use strict';

const advice = require("../utils/data/advice").advice

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NotableAlumnis',notableAlumni)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('NotableAlumnis', null, {});
  }
};