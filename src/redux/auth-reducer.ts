import {AppThunkType, AuthType} from './redux-store';
import {authAPI} from '../api/api';
import {formRegDataType} from "../components/Login/LoginForm";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA'

const initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false,
}

export const authReducer = (state: AuthType = initialState, action: UniversalTypeForAuthType): AuthType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload, //perezatir svoistva
            }
        }
        default:
            return state
    }
}

export type UniversalTypeForAuthType =
    | ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({type: SET_USER_DATA,
        payload: {id, login, email, isAuth}} as const)

/*export const getAuthUserDataTC = (): AppThunkType<Promise<any>> => (dispatch) => {
     return   authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserDataAC(id, login,  email,true))
                }
            })
    }*/

export const getAuthUserDataTC = (): AppThunkType<Promise<any>> => async (dispatch) => {
    let data = await authAPI.me()
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserDataAC(id, login,  email,true))
            }
}

/*export const loginTC = (formData: formRegDataType): AppThunkType => (dispatch) => {
        authAPI.login(formData)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
                    dispatch(stopSubmit('login', {
                        email: data.messages.length > 0 ? data.messages[0] : "Error",
                        password: data.messages.length > 0 ? data.messages[0] : "Error"
                    },))
                }
            })
    }*/
export const loginTC = (formData: formRegDataType): AppThunkType => async (dispatch) => {
   let data = await authAPI.login(formData)

            if (data.resultCode === 0) {
                await dispatch(getAuthUserDataTC())
            } else {
                dispatch(stopSubmit('login', {
                    email: data.messages.length > 0 ? data.messages[0] : "Error",
                    password: data.messages.length > 0 ? data.messages[0] : "Error"
                },))
            }

}

/*export const logoutTC = (): AppThunkType => (dispatch) => {
        authAPI.logout()
            .then((data) => {
                if (data.resultCode === 0 ) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }*/
export const logoutTC = (): AppThunkType => async (dispatch) => {
  let data = await  authAPI.logout()
            if (data.resultCode === 0 ) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
}
