import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/utils/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const departments = await prisma.department.findMany();
            res.status(200).json(departments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error to get departments: '+ error.message });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' + req.method });
    }
}