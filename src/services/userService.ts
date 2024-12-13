import {UserModel} from '@/models/userModel';

export const UserService = {
    getUsers: async () => {
        return await UserModel.findAll();
    },
    createUser: async (email: string, name?: string) => {
        if (!email) throw new Error('Email is required');
        return await UserModel.create({email, name});
    },
    deleteUser: async (email: string) => {
        return await UserModel.delete({email});
    },
    updateUser: async (email: string, name: string) => {
        return await UserModel.update({email, name})
    }
};

