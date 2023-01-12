'use strict';

const SubTaskTable = require("../utils/data/subTasks").subtasks

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SubTasks',SubTaskTable)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SubTasks', null, {});
  }
};
