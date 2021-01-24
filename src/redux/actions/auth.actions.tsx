import { AUTH_USER, AUTH_FAILURE, AuthTypes, AUTH_SUCCESS, LOGOUT } from "../types"
import { ActionCreator } from "redux";
import { IUser } from "../../shared/models/user-model";
import { authService } from "../../shared/services/auth.service";

export const updateUser: ActionCreator<AuthTypes> = () => {
    return { type: AUTH_USER };
}
export const failure: ActionCreator<AuthTypes> = (error: string) => {
    return { type: AUTH_FAILURE, payload: { errorMessage: error } };
}

export const success: ActionCreator<AuthTypes> = (user: IUser) => {
    return { type: AUTH_SUCCESS, payload: { user: user } };
}

export const log_out: ActionCreator<AuthTypes> = () => {
    return { type: LOGOUT };
}

export function auth(userName?:string) {
    if(userName) {

        return (dispatch: ActionCreator<AuthTypes>) => {
            dispatch(updateUser());
            return authService.authUser()
            .then(
                response => {
                    dispatch(success(response))
                },
                error => {
                    dispatch(failure('Server error.'))
                })
            }
        }
    else {
        return (dispatch: ActionCreator<AuthTypes>) => {
            dispatch(log_out());
            return authService.logoutUser()
            .then(
                response => {
                    dispatch(success(response))
                },
                error => {
                    dispatch(failure('Server error.'))
                })
            }
    }
}