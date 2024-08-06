import { Request } from 'express';

import { prisma } from "../../../database";

interface roleData {
    name: string;
    descriptions: string;
    createdAt: string;
    enabled: boolean;
}
export const createRoleService = async (req: Request): Promise<roleData | string> => {
    // Extract query parameters and provide default values if needed
    const name = req.query.name as string || '';
    const descriptions = req.query.descriptions as string || '';
    const createdAt = req.query.createdAt as string || '';// new Date();
    const enabled = typeof req.query.enabled === 'string' && req.query.enabled.toLowerCase() === 'true';
    const newRoleData: roleData = {
        name,
        descriptions,
        createdAt,
        enabled
    };
    try {
        const newRole = await prisma.mtx_role.create({
            data: {
                name: newRoleData.name,
                descriptions: newRoleData.descriptions,
                createdAt: newRoleData.createdAt,
                updatedAt: null,
                enabled: newRoleData.enabled
            }
        });
        return newRole;
    } catch (error: any) {
        console.error('Error in creating Role in mtx_role:', error);
        return `Could not create role: ${(error as Error).message}`;
    }
}
