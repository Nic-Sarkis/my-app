import { Pool } from 'pg';
import { PrismaClient } from '@prisma/client';

// Setup PostgreSQL connection
const connectionString: string = process.env.DATABASE_URL || '';
const pool = new Pool({ connectionString });

// Initialize Prisma Client
const prisma = new PrismaClient();

// Check database connection
const checkDatabaseConnection = async (): Promise<void> => {
    try {
        await prisma.$connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
};

// Export Prisma client and checkDatabaseConnection function separately
export { prisma, checkDatabaseConnection };
