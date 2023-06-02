module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.addColumn('Users', 'activityName', {
                  type: Sequelize.ARRAY(Sequelize.STRING)
              }, { transaction: t }),
        ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.removeColumn('Users', 'activityName', { transaction: t }),
          ])
      })
  }
};