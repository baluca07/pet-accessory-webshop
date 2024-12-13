import { NextApiRequest, NextApiResponse } from 'next';
import {PrismaClient} from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    if (req.method === 'GET') {
        try {
            const employees = await prisma.employee.findMany({
                include: {
                    department: {
                        select: {
                            name: true,
                        },
                    },
                },
            });

            res.status(200).json(employees);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error to get employees: ' + error.message });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
