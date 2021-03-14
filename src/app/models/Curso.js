import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                nome: Sequelize.STRING,
                turno: Sequelize.STRING
            },
            {
                sequelize,
                tableName: 'cursos'
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Campus, {
            foreignKey: 'campus_id',
            as: 'campus',
        });
    }
}
export default Curso;