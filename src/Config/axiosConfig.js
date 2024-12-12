import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        'Çontent-Type': 'application/json',
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
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosInstance;