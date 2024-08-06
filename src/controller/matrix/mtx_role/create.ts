import { Request, Response } from 'express';
import { createRoleService } from '../../../service/matrix/mtx_role/create';

// interface roleData {
//     name: string;
//     descriptions: string;
//     createdAt: string;
//     enabled: boolean;
// }

const createRole = async (req: Request, res: Response): Promise<void> => {
    try {
        const newRole = await createRoleService(req);
        console.log('Created Role:', newRole);
        res.status(200).send("Role Created: " + JSON.stringify(newRole));
    } catch (error) {
        console.error('Error creating Role:', error);
        res.status(500).send('Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
};

export { createRole };