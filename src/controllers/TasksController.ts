import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import { tasksrepositories } from "../repositories/tasksRepository";


class TasksController {
    async create(req: Request, res: Response) {
        const { name, description, status, end_day } = req.body;

        if (!name || !description || !status || !end_day) {
            return res.status(400).json({message: 'Insira todas as informações'})
        }

        try {
            
            const user = await userRepository.findOneBy({
                id: req.user.id
            })

            if (!user) {
                return res.status(404).json({message: 'Não encontrado'})
            }

            const newTask = tasksrepositories.create({
                name,
                description,
                status,
                end_day,
                user
            });

            await tasksrepositories.save(newTask);

            const { user: _, ...sempass } = newTask

            return res.status(200).json(sempass)

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Erro interno'})
        }
    }

    async get(req: Request, res: Response) {
        

        return res.json(req.user.tasks)
    }

    async getById(req: Request, res: Response) {
        const { idTask } = req.params;

        if (!idTask) {
            return res.status(400).json({message: 'Informe um id'})
        }

        try {
            const user = await userRepository.findOne({where: {id: req.user.id}})

            const task = await tasksrepositories.findOne({where: {id: Number(idTask), user: user}})
             
            return res.status(200).json(task)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Erro interno'})
        }
    }

    async atualizar(req: Request, res: Response) {
        const { idTask } = req.params;
        const { name, description, status } = req.body

        if (!idTask) {
            return res.status(400).json({message: 'Informe um id'})
        }

        try {
            const user = await userRepository.findOne({where: {id: req.user.id}})

            const task = await tasksrepositories.findOne({where: {id: Number(idTask), user: user}})

            const atualizar = {
                ...task,
                name,
                description,
                status
            }

            await tasksrepositories.save(atualizar)

            return res.status(200).send()

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Erro interno'})
        }

    }

    async deletar(req: Request, res: Response) {
        const { idTask } = req.params;

        if (!idTask) {
            return res.status(400).json({message: 'Informe um id'})
        }

        try {
            const user = await userRepository.findOne({where: {id: req.user.id}})

            const task = await tasksrepositories.findOne({where: {id: Number(idTask), user: user}})

            await tasksrepositories.remove(task);
            return res.status(204).send()
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Erro interno'})
        }
    }
}

export default new TasksController();