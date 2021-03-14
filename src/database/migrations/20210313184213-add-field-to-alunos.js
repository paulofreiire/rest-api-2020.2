'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("alunos", "curso_id", {
    type: Sequelize.INTEGER,
    references: { model: 'cursos', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false
  }),

  down: (queryInterface) => queryInterface.removeColumn('alunos', 'curso_id')
};
