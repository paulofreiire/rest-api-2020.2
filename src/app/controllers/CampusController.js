import * as Yup from 'yup';
import Campus from "../models/Campus";
import Curso from "../models/Curso";

class CampusController {

    async store(req, res) {
        const { nome, cidade, cursos } = req.body;
        console.log(cursos)

        const schemaCampus = new Yup.object().shape({
            nome: Yup.string().required(),
            cidade: Yup.string().required(),
        });

        const schemaCursos = new Yup.array().of(
            Yup.object().shape({
                nome: Yup.string().required(),
                turno: Yup.string().required()
            })
        );


        if (!(await schemaCampus.isValid(req.body))) {
            return res.status(400).json({ error: 'Faltando argumentos do campus!' });
        }


        if (!(await schemaCursos.isValid(cursos))) {
            return res.status(400).json({ error: 'Faltando argumentos do curso!' });
        }

        const campus = await Campus.create({ nome, cidade });

        const cursosXD = await Promise.all(cursos.map(async (curso) => {
            return await Curso.create({
                nome: curso.nome,
                turno: curso.turno,
                campus_id: campus.id
            });
        }));

        return res.json({ campus, cursosXD });
    }

    async index(req, res) {
        const campi = await Campus.findAll({
            attributes: [
                'id', 'nome', 'cidade'
            ],
            include: [
                {
                    model: Curso,
                    as: 'curso'
                }
            ]
        });
        return res.json(campi)
    }

    async update(req, res) {
        const { nome, cidade } = req.body;

        const schemaCampus = new Yup.object().shape({
            nome: Yup.string().required(),
            cidade: Yup.string().required(),
        });


        if (!(await schemaCampus.isValid(req.body))) {
            return res.status(400).json({ error: 'Faltando argumentos do campus!' });
        }

        let campus = await Campus.findByPk(req.params.id)
        if (campus) {
            campus = await campus.update(req.body)
            return res.json(campus)
        } else return res.status(404).json({ error: 'Não encontrado!' });

    }

    async delete(req, res) {
        let campus = await Campus.findByPk(req.params.id)
        if (campus) {
            campus = await campus.destroy(req.body)
            return res.json({ message: `registro ${campus.id} deletado!` })
        } else return res.status(404).json({ error: 'Não encontrado!' });
    }

    async show(req, res) {
        let campus = await Campus.findByPk(req.params.id, {
            attributes: [
                'id', 'nome', 'cidade'
            ],
            include: [
                {
                    model: Curso,
                    as: 'curso'
                }
            ]
        })
        if (campus) {
            return res.json(campus)
        } else return res.status(404).json({ error: 'Não encontrado!' });
    }
}

export default new CampusController();