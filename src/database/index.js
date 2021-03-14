import Sequelize from "sequelize";
import databaseConfig from '../config/database';

import Aluno from '../app/models/Aluno.js';
import Campus from '../app/models/Campus.js';
import Curso from '../app/models/Curso.js';


const models = [Aluno, Campus, Curso];

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map(model => model.init(this.connection))
            .map((model) => {
                if (model.associate) model.associate(this.connection.models);
                return model;
            });
    }
}

export default new Database();
