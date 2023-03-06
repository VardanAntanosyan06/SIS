'use strict';

const no = require("../utils/data/notablealumni").notableAlumni

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Universities',universities)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Universities', null, {});
  }
};