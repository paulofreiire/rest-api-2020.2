import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
    static init(sequelize) {
        super.init(
            {
                matricula: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                nome: Sequelize.STRING,
                email: Sequelize.STRING,
                dateNascimento: Sequelize.DATE,
                ddd: Sequelize.NUMBER,
                telefone: Sequelize.NUMBER,
                operadora: Sequelize.STRING,

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

        this.belongsTo(models.Campus, {
            foreignKey: 'campus_id',
            as: 'campus',
        });
    }

    
}
export default Aluno;