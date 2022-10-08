import { Request, Response, Router } from "express";
import TasksController from "./controllers/TasksController";
import UserCOntroller from "./controllers/UserCOntroller";
import { authMiddlewaresTasks } from "./middlewares/authMiddlewareTask";
export const route = Router();

route.post('/users/login', UserCOntroller.login);

route.post('/users/create', UserCOntroller.create)

route.use(authMiddlewaresTasks);

route.post('/tasks/create', TasksController.create);

route.get('/tasks', TasksController.get);

route.get('/tasks/:idTask', TasksController.getById);

route.delete('/tasks/:idTask', TasksController.deletar);

route.put('/tasks/:idTask', TasksController.atualizar);