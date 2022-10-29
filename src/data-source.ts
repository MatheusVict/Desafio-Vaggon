import 'reflect-metadata';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "desafio",
    synchronize: true,
    logging: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    subscribers: [],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})