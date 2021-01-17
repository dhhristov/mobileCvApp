import { IUser } from '../../shared/models/user-model';
import { AUTH_USER, AUTH_FAILURE, AuthTypes, AUTH_SUCCESS } from '../types';

interface IUserState {
    loading: boolean,
    isAuth: boolean,
    user: IUser,
    errorMessage: string
}

const initialState: IUserState = {
    loading: false,
    isAuth: false,
    user: {
        id: "",
        userName: ''
    },
    errorMessage: ""
};

export function authReducer(state: IUserState = initialState, action: AuthTypes): IUserState {
    switch (action.type) {
        case AUTH_USER: {
            return {
                ...state,
                loading: true,
            };
        }
        case AUTH_FAILURE: {
            return {
                ...state,
                loading: initialState.loading,
                isAuth: initialState.isAuth,
                user: initialState.user,
                errorMessage: action.payload.errorMessage
            };
        }
        case AUTH_SUCCESS: {
            return {
                ...state,
                loading: initialState.loading,
                isAuth: true,
                user: action.payload.user,
                errorMessage: initialState.errorMessage
            };
        }
        default:
            return state
    }
};