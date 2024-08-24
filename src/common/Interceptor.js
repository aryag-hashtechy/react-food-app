import axios from "axios";
import { GetUserToken } from "../lib/GlobalMethods";

export const requestInstance = axios.create();

requestInstance.interceptors.request.use(
  (config) => {
    const token = GetUserToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    } else {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
