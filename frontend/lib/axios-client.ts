import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { data } = error.response;
    return Promise.reject({
      ...data,
    });
  }
);

export default API;
