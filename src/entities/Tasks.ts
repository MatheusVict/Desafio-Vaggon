import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {User} from './User'


@Entity('tasks')
export class Tasks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    name: string;

    @Column({type: 'text'})
    description: string;

    @Column()
    status: string;

    @Column({type: 'text'})
    end_day: string;

    @CreateDateColumn()
    created_at: Date;


    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn({name: 'user_id'})
    user: User;
}