const express = require('express');
import { Request, Response } from 'express';

import { checkDatabaseConnection } from './database';
import indexRoute from './routes';

const app = express();
const port = 4000;

app.use("/v1", indexRoute);

app.get("/api/ping", async (req: Request, res: Response) => {
    try {
        res.send("Hello World from enableDB!!");
    } catch (error) {
        res.status(500).send("Error fetching feature flag details");
    }
});

checkDatabaseConnection();



app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

export default app;