import { IUser } from "../models/user-model";


export const authService = {
    authUser,
    logoutUser
};

async function authUser(): Promise<IUser> {
    // return await getFromServer('/api/');
    return { id: '1', userName: 'test' }
}

async function logoutUser(): Promise<IUser> {
    // return await getFromServer('/api/');
    return { id: '', userName: '' }
}