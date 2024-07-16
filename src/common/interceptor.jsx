import axios from "axios";
import { GetUserToken } from "../lib/GlobalMethod";

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
    console.log("ERRR", error);
    return Promise.reject(error);
  }
);
