'use strict';

const Blogs = require("../utils/data/Blogs").Blogs

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Blogs',Blogs)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Blogs', null, {});
  }
};