'use strict';

const Tasks = require("../utils/data/tasks").Tasks

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks',Tasks)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
