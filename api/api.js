import axios from "axios";
import * as Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";


const api = axios.create({
    baseURL: 'https://luxsuv-backend.fly.dev',
})

api.interceptors.request.use(async (config) => {
    const token = await SecureStore.getItemAsync("jwtToken")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => Promise.reject(error))

export const login = async (credentials) => {
    const res = await api.post("/driver/login", credentials)
    return res.data
}

export const fetchRides = async () => {
    const res = await api.post("/driver/book-rides");
    return res.data
}

export const logout = async () => {
    await SecureStore.deleteItemAsync("jwtToken")
}