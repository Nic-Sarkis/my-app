const express = require('express');
import { Request, Response } from 'express';

import { checkDatabaseConnection } from './database';
import { createRole } from './controller/matrix/mtx_role/create'
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

// app.get("/api/createRole", async (req: Request, res: Response) => {
//     try {
//         const data = {
//             query: {
//                 name: "Nic",
//                 descriptions: "desc",
//                 createdAt: "2023-07-03T12:00:00Z",
//                 enabled: "true"
//             }
//         };
//         const role = await createRole(data);
//         res.status(500).send("Role: " + role);
//     } catch (error) {
//         res.status(500).send("Error " + error);
//     }
// });

checkDatabaseConnection();

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

export default app;