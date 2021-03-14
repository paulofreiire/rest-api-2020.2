'use strict';
var DataTypes = require('sequelize/lib/data-types')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos', {
      matricula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('alunos');
  }
};
