import Sequelize, { Model } from 'sequelize';

class Campus extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                nome: Sequelize.STRING,
                cidade: Sequelize.STRING
            },
            {
                sequelize,
                tableName: 'campus'
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.Curso, {
            foreignKey: 'campus_id',
            as: 'curso',
        });
    }
}
export default Campus;