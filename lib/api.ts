import axios from "axios";

// const API_URL = "https://glore-bd-backend-node-mongo.vercel.app/api/";
const API_URL = "https://admin.ezicalc.com/api/";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add headers, tokens, etc.)
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    // Handle response errors
    console.error("Response Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
