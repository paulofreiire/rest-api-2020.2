import { Router } from 'express';
import AlunoController from './app/controllers/AlunoController.js'


const routes = new Router();

routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.store);

export default routes;