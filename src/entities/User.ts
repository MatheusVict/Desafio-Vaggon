import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tasks } from "./Tasks";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text', unique: true})
    login: string;

    @Column({type: 'text'})
    password: string;

    @OneToMany(() => Tasks, (tasks) => tasks.user)
    tasks: Tasks[]
}