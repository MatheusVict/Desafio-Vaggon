import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import  Jwt  from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";

class UserController {
    async create(req: Request, res: Response) {
        const { login, password } = req.body;

        if (!login || !password) {

            return res.status(400).json({message: 'informe sobre o usuário'});

        } else {

            try {
                const userExist = await userRepository.findOneBy({login});

                if (userExist) {
                    return res.status(400).json({message: 'usuário já existente'})
                }

                const passwordHash = await bcrypt.hash(password, 10)

                const newUser = userRepository.create({
                    login,
                    password: passwordHash
                });

                await userRepository.save(newUser);

                const {password: _, ...user} = newUser

                return res.status(201).json(user);

            } catch (error) {

                console.log(error);
                return res.status(500).json({message: 'Error interno'})

            }
        }


    }

    async login(req: Request, res: Response) {
        const { login, password } = req.body;

        if (!login || !password) {

            return res.status(400).json({
                message: 'informações incompletas'
            });

        } 

        try {
            const user = await userRepository.findOneBy({login})

            if (!user) {
                return res.status(400).json({message: 'Email ou senha invalida'})
            }

            const verifyPass = await bcrypt.compare(
                password, 
                user.password
                );

            if (!verifyPass) {
                return res.status(500).json({message: 'Email ou senha invalida'})
            }

            const token = Jwt.sign({id: user.id}, 
                'SHJFSJFJKSFKS', 
                {expiresIn: '3h'}
            );

            const {password: _, ...userlogin} = user


            return res.status(200).json({
                user: userlogin,
                token: token
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Error interno'})
        }
        

    }

}

export default new UserController();