import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import Jwt from 'jsonwebtoken'

export type JwtPayload = {
    id: number;
}

export const authMiddlewaresTasks = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({message: 'Não autorizado'})
        }

        const token = authorization.split(' ')[1]

        const { id } = Jwt.verify(token, 'SHJFSJFJKSFKS') as JwtPayload;

        const user = await userRepository.findOne({where: {id},
            relations: {
                tasks: true
            }
        })


        if (!user) {
            return res.status(400).json({message: 'Não autorizado'})
        }

        const { password: _, ...loggedUser } = user;

        req.user = loggedUser

        next();
}
