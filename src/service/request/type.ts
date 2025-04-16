import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface myRequestConfig extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn?: (res: AxiosRequestConfig) => AxiosRequestConfig;
    requestFailureFn?: (err: any) => any;
    responseSuccessFn?: (res: AxiosResponse) => AxiosResponse;
    responseFailureFn?: (err: any) => any;
  };
}
