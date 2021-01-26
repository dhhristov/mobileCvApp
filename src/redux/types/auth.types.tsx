import { IUser } from "../../shared/models/user-model"

export const AUTH_USER = "AUTH_USER"
export const AUTH_FAILURE = "AUTH_FAILURE"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const LOGOUT = "LOGOUT"


export interface ICV {
    id: string
    title: string
}

interface AuthUser {
    type: typeof AUTH_USER

}

interface AuthFailure {
    type: typeof AUTH_FAILURE,
    payload: { errorMessage: string }
}

interface AuthSuccess {
    type: typeof AUTH_SUCCESS,
    payload: { user: IUser }
}

interface Logout {
    type: typeof LOGOUT
}

export type AuthTypes = AuthUser | AuthFailure | AuthSuccess | Logout