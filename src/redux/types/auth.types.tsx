import { IUser } from "../../shared/models/user-model"

export const AUTH_USER = "AUTH_USER"
export const AUTH_FAILURE = "AUTH_FAILURE"
export const AUTH_SUCCESS = "AUTH_SUCCESS"


export interface ICV {
    id: string
    title: string
}

interface Auth {
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

export type AuthTypes = Auth | AuthFailure | AuthSuccess