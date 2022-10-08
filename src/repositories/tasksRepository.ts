import { AppDataSource } from "../data-source";
import { Tasks } from "../entities/Tasks";

export const tasksrepositories = AppDataSource.getRepository(Tasks)