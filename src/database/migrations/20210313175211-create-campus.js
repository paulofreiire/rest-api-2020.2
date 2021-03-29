'use strict';
var DataTypes = require('sequelize/lib/data-types')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campus', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campus');
  }
};
