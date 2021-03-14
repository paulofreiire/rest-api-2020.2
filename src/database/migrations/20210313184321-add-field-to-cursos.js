'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("cursos", "campus_id", {
    type: Sequelize.INTEGER,
    references: { model: 'campus', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false
  }),
 
  down: (queryInterface) => queryInterface.removeColumn('cursos', 'campus_id')
};