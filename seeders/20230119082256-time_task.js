'use strict';

const timeTasks = require("../utils/data/taskTime").timeTasks

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('timeTasks',timeTasks)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('timeTasks', null, {});
  }
};
