import {formRegDataType} from "../components/Login/LoginForm";
import {APIResponseType, instance, ResultCodeEnum, ResultCodeForCaptchaEnum} from "./api";

type MeResponseType = {
    id: number
    email: string
    login: string
}
type LoginResponseType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseType>>('auth/me')
            .then(res => res.data)
    },
    login(regData: formRegDataType) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodeEnum | ResultCodeForCaptchaEnum>>('auth/login', regData)
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(res => res.data)
    }
}
