import * as Yup from 'yup';
import Aluno from "../models/Aluno";
import Curso from "../models/Curso";
import Campus from '../models/Campus';


class AlunoController {

    async store(req, res) {
        const { matricula, curso_id, campus_id } = req.body;
        const schemaAluno = new Yup.object().shape({
            matricula: Yup.number().required().min(6).max(6),
            nome: Yup.string().required().min(3),
            dateNascimento: Yup.date().required(),
            email: Yup.string().required(),
            ddd: Yup.number().required(),
            telefone: Yup.number().required(),
            operadora: Yup.string().required(),
            campus_id: Yup.number().required(),
            curso_id: Yup.number().required(),
        });

        console.log(req.body)

        /*if (!(await schemaAluno.isValid(req.body))) {
            return res.status(400).json({ error: 'Faltando argumentos do aluno' });
        }*/

        let aluno = await Aluno.findByPk(matricula);
        let curso = await Curso.findByPk(curso_id);
        let campus = await Campus.findByPk(campus_id);
        if (!curso) {
            return res.status(400).json({ error: 'Curso não encontrado!' });
        } else if (!campus) {
                return res.status(400).json({ error: 'Campus não encontrado!' });
        } else if (!aluno) {
            aluno = await Aluno.create(req.body);
            return res.json(aluno)
        }
        else {
            return res.status(400).json({ error: 'Matricula ja cadastrada' });
        }

    }
    async index(req, res) {

        const { curso, campus, dataInicial, dataFinal } = req.query

        const alunos = await Aluno.findAll({
            
            attributes: [
                'matricula', 'nome', 'dateNascimento'
            ],
            include: [
                {
                    model: Curso,
                    as: 'curso'
                }
            ]
        });
        return res.json(alunos)
    }

    async update(req, res) {
        const { nome, dateNascimento, curso_id } = req.body;
        const schemaAluno = new Yup.object().shape({
            nome: Yup.string().required(),
            dateNascimento: Yup.date().required(),
            curso_id: Yup.number().required(),
        });

        if (!(await schemaAluno.isValid(req.body))) {
            return res.status(400).json({ error: 'Faltando argumentos do aluno' });
        }
        let aluno = await Aluno.findByPk(req.params.id)
        let curso = await Curso.findByPk(curso_id);
        if (!curso) {
            return res.status(400).json({ error: 'Curso não encontrado!' });
        } else if (aluno) {
            aluno = await aluno.update({ nome, dateNascimento, curso_id })
            return res.json(aluno)
        } else return res.status(404).json({ error: 'Não encontrado!' });
    }
    async delete(req, res) {
        let aluno = await Aluno.findByPk(req.params.id)
        if (aluno) {
            aluno = await aluno.destroy(req.body)
            return res.json({ message: 'Aluno deletado!' })
        } else return res.status(404).json({ error: 'Não encontrado!' });
    }
    async show(req, res) {
        let aluno = await Aluno.findByPk(req.params.id, {
            attributes: [
                'matricula', 'nome', 'dateNascimento'
            ],
            include: [
                {
                    model: Curso,
                    as: 'curso'
                }
            ]
        });
        if (aluno) {
            return res.json(aluno)
        } else return res.status(404).json({ error: 'Não encontrado!' });


    }
}

export default new AlunoController();