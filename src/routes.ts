import { Request, Response, Router } from "express";
export const route = Router();

route.get('/', (req:Request, res: Response) => {
    res.send('oi')
})