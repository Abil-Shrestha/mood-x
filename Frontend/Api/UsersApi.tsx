import axios from "axios";

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://mood-x-production.up.railway.app"
    : "http://localhost:5000";

const createInstance = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json"
    }
  });

  // Add a request interceptor
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      console.log(token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createInstance(API_URL);
