import axios from 'axios';
import {formRegDataType} from "../components/Login/LoginForm";
import {FormProfileDataType} from "../components/Profile";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '63c67c51-4409-4669-8ac4-fb5c73a782d9'
    }
})

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get(`profile/` + userId)
            .then(res => res.data)
    },
    getStatus(userId: number | null) {
        return instance.get(`profile/status/` + userId)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(res => res.data)
    },
    savePhoto(formData: FormData) {
        return instance.put(`profile/photo`, formData)
            .then(res => res.data)
    },
    updateProfile(formData: FormProfileDataType) {
        return instance.put(`profile`, formData)
            .then(res => res.data)
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(res => res.data)
    },
    login(regData: formRegDataType) {
        return instance.post('auth/login', regData)
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(res => res.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
            .then(res => res.data)
    }
}