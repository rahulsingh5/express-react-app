import * as express from 'express';
import { Request, Response } from 'express';

import { config } from './config';

const app = express();


app.get('/', (req: Request, res: Response) => {
    res.send({ bye: "buddy" });
});


app.listen(config.PORT, () => {
    console.log(`server is listening at port ${config.PORT}`);
});