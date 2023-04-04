"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn("Users", "trainingDate", {
      type: Sequelize.STRING,
    });
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn("trainingDate");
  },
};
