'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'isActive',
        {
          type: Sequelize.BOOLEAN,
          defaultValue:true
        }
      ),
      queryInterface.addColumn(
        'Users',
        'deleteTime',
        {
          type: Sequelize.DATE
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'isActive'),
      queryInterface.removeColumn('Users', 'deleteTime')
    ]);
  }
};