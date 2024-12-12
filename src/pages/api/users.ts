import { NextApiRequest, NextApiResponse } from 'next';
import { UserService } from '@/services/userService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const users = await UserService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ message: errorMessage });
        }
    } else if (req.method === 'POST') {
        try {
            const { email, name } = req.body;
            const user = await UserService.createUser(email, name);
            res.status(201).json(user);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ message: errorMessage });
        }
    } else if (req.method === 'DELETE') {
        try {
            const { email } = req.body;
            const deletedUser = await UserService.deleteUser(email);
            res.status(200).json(deletedUser);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ message: errorMessage });
        }
    } else if (req.method === 'PUT') {
        const { email, name } = req.body;
        try {
            const updatedUser = await UserService.updateUser(email, name);
            res.status(200).json(updatedUser);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ message: errorMessage });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
