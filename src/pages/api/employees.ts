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

            const employeesWithDepartmentName = employees.map((emp) => ({
                id: emp.id,
                name: emp.name,
                email: emp.email,
                phone: emp.phone,
                departmentName: emp.department?.name || "N/A",
            }));

            res.status(200).json(employeesWithDepartmentName);
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ error: 'Error to get departments: ' + error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred.' });
            }
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
