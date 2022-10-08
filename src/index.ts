import express from 'express';
import cors from 'cors';
import { route } from './routes';
import { AppDataSource } from './data-source';
const PORT = Number(process.env.PORT);

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(route);

    return app.listen(3333, ()=> console.log('servidor inciado'))

}).catch(err => console.log(err))