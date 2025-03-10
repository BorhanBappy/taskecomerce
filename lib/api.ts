import axios from "axios";

const API_URL = "https://admin.ezicalc.com/api/";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add headers or tokens here
    return config;
  },
  (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
