import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { myRequestConfig } from './type';
import router from '@/router/login';

class axiosRequest {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    // 添加全局请求拦截器
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      // 添加token
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }
      return config;
    });
    // 添加全局响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        return response; // 直接返回数据，避免多层 data 包裹
      },
      (error) => {
        if (error.response?.status === 401) {
          console.warn('Token 失效，请重新登录');
          localStorage.removeItem('token'); // 清除过期 token
          // 可以跳转到登录页
          router.replace('/login')
        }
        return Promise.reject(error);
      },
    );
  }

  // 请求封装
  request(config: myRequestConfig) {
    // 执行自定义拦截器,返回config
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  // get请求
  get(config: myRequestConfig) {
    return this.instance.request({ ...config, method: 'GET' });
  }
  // post请求
  post(config: myRequestConfig) {
    return this.instance.request({ ...config, method: 'POST' });
  }
}

export default axiosRequest;
