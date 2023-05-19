import {ActionsType, AppThunkType} from "./store";
import {ResultCodeEnum, ResultCodeForCaptchaEnum,} from "api/api";
import {formRegDataType} from "components/Login/LoginForm";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null,
}

export const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case "auth/SET-AUTH-USER-DATA":
        case "auth/GET-CAPTCHA-URL-SUCCESS":
            return {...state, ...action.payload}

        default:
            return state
    }
}

// actions
export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'auth/SET-AUTH-USER-DATA', payload: {id, login, email, isAuth}
} as const)
export const getCaptchaUrlSuccessAC = (captchaUrl: string | null) => ({
    type: 'auth/GET-CAPTCHA-URL-SUCCESS', payload: {captchaUrl}
} as const)

// thunks
export const getAuthUserDataTC = (): AppThunkType<Promise<any>> => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === ResultCodeEnum.Success) {
        const {id, login, email} = data.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}
export const loginTC = (formData: formRegDataType): AppThunkType => async (dispatch) => {
    const data = await authAPI.login(formData)
    if (data.resultCode === ResultCodeEnum.Success) {
        await dispatch(getAuthUserDataTC())
        dispatch(getCaptchaUrlSuccessAC(null))
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrlTC())
        }
        dispatch(stopSubmit('login', {
            email: data.messages.length > 0 ? data.messages[0] : "Error",
            password: data.messages.length > 0 ? data.messages[0] : "Error"
        },))
    }
}
export const logoutTC = (): AppThunkType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

export const getCaptchaUrlTC = (): AppThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccessAC(data.url))
}

// types
export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
    captchaUrl: string | null
}
