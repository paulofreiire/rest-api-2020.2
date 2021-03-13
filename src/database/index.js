import Sequelize from "sequelize";
import databaseConfig from '../config/database';

import Aluno from '../app/models/Aluno.js'

const models = [Aluno];

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map(model => model.init(this.connection));
    }
}

export default new Database(); 