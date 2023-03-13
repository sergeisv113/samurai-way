import {AuthType, MessagesPageType, UserType} from './redux-store';
import {Dispatch} from 'react';
import {authAPI} from '../api/api';


const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: AuthType = initialState, action: UniversalTypeForAuthType) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                //perezatir svoistva
                isAuth: true,//zaloginen
            }
        }
        default:
            return state
    }
}

export type UniversalTypeForAuthType =
    | ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (userId: number, email: string, login: string) => ({type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }} as const)

export const getAuthUserDataTC = () => {
    return (dispatch: Dispatch<UniversalTypeForAuthType>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}