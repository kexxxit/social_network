import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0b4577d6-aeb8-4b30-af7f-00b18e31fa58"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
    },
    postFollow(id) {
        return instance.post(`follow/${id}`)
    },
    login() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    auth(email, password, rememberMe) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}


