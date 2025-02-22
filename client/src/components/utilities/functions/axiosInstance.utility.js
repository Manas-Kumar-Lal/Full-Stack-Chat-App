import axios from 'axios'

// Create an Axios instance with default configuration
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true, // Send cookies with requests
    headers: {
        "Content-Type": "application/json",
    },
});