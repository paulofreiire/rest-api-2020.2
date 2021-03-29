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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ddd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operadora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      campus_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      curso_id: {
        type: Sequelize.INTEGER,
        references: { model: 'campus', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('alunos');
  }
};
