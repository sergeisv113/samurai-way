import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3e036b30-8118-48ef-bb80-2123e504d12c'
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followOnUser(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollowOnUser(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
}


