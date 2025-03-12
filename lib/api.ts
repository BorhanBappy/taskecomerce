import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

// console.log("API URL:", API_URL); // Debugging
// console.log(process.env.NEXT_PUBLIC_API_URL);
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
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
