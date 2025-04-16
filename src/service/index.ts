import axiosRequest from './request';
import { BASE_URL, TIMEOUT } from '@/service/config/index';

const myRequet = new axiosRequest({ baseURL: BASE_URL, timeout: TIMEOUT });
export default myRequet;
