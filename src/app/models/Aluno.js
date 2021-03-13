import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
    static init(sequelize) {
        super.init(
            {
                matricula: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                nome: Sequelize.STRING
            },
            {
                sequelize,
                tableName: 'alunos'
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Curso, {
            foreignKey: 'curso_id',
            as: 'curso',
        });
    }
}
export default Aluno;