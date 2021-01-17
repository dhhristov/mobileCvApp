import { AUTH_USER, AUTH_FAILURE, AuthTypes, AUTH_SUCCESS } from "../types"
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

export function auth() {
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

export function fail() {
    return (dispatch: ActionCreator<AuthTypes>) => {
        dispatch(updateUser());
        return authService.authUser()
            .then(
                response => {
                    dispatch(failure("test"))
                },
                error => {
                    dispatch(failure('Server error.'))
                })
    }
}