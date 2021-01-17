import { IUser } from "../models/user-model";


export const authService = {
    authUser
};

async function authUser(): Promise<IUser> {
    // return await getFromServer('/api/');
    return { id: '1', userName: 'test' }
}