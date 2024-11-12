import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { status, data } = error.response;
    return Promise.reject({
      status,
      ...data,
    });
  }
);

export default API;
