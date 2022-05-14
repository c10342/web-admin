import store from "@/store";
import axios from "axios";
import { ElMessage } from "element-plus";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000,
});

service.interceptors.request.use(
  (config) => {
    const token = store.getters.token;
    if (token) {
      // 统一注入token
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data;
    if (success) {
      return data;
    } else {
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
    // token失效处理，根据实际业务需求
  },
  (error) => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
