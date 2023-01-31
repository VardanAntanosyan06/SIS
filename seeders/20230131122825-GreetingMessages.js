'use strict';

const GreetingMessages = require("../utils/data/greetingMessages").GreetingMessages

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('GreetingMessages',GreetingMessages)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('GreetingMessages', null, {});
  }
};
