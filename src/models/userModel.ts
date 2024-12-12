import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const UserModel = {
    findAll: async () => {
        return prisma.user.findMany();
    },
    create: async (data: { email: string; name?: string }) => {
        return prisma.user.create({ data });
    },
    delete: async (data: { email: string }) => {
        const { email } = data;
        try {
            return await prisma.user.delete({
                where: {
                    email: email,
                },
            });
        } catch (error) {
            // Itt az error változó típusának biztosítása
            if (error instanceof Error) {
                throw new Error(`User with email ${email} not found or could not be deleted. Error: ${error.message}`);
            }
            throw new Error(`User with email ${email} not found or could not be deleted. Unknown error occurred.`);
        }
    },
    update: async (data: { email: string; name?: string }) => {
        const { email, name } = data;
        try {
            return await prisma.user.update({
                where: {
                    email: email,
                },
                data: {
                    name: name,
                },
            });
        } catch (error) {
            // Itt is az error változó típusának biztosítása
            if (error instanceof Error) {
                throw new Error(`User with email ${email} not found or could not be updated. Error: ${error.message}`);
            }
            throw new Error(`User with email ${email} not found or could not be updated. Unknown error occurred.`);
        }
    },
};
