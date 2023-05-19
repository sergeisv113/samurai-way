import axios from 'axios';
import {userType} from "../components/Users/UsersContainer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '63c67c51-4409-4669-8ac4-fb5c73a782d9'
    }
})

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
export type GetItemsType = {
    items: Array<userType>
    totalCount: number
    error: string | null
}


export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}
