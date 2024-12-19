import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

// Optionally add interceptors for request and response
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);



axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

export default axiosInstance;


