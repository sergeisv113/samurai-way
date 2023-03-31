import axios from 'axios';
import {formRegDataType} from "../components/Login/LoginForm";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3e036b30-8118-48ef-bb80-2123e504d12c'
    }
})

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followOnUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },
    unfollowOnUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
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
}



