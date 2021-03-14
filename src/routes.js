import { Router } from 'express';
import AlunoController from './app/controllers/AlunoController.js'
import CampusController from './app/controllers/CampusController.js'


const routes = new Router();

routes.get('/alunos', AlunoController.index)
routes.get('/alunos/:id', AlunoController.show)
routes.post('/alunos', AlunoController.store)
routes.put('/alunos/:id', AlunoController.update)
routes.delete('/alunos/:id', AlunoController.delete)

routes.get('/campus', CampusController.index)
routes.get('/campus/:id', CampusController.show)
routes.post('/campus', CampusController.store)
routes.put('/campus/:id', CampusController.update)
routes.delete('/campus/:id', CampusController.delete)

export default routes;
