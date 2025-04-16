import Mock from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/login', // 请求的 URL
    method: 'post', // 请求的方法
    response: () => {
      return {
        code: 0,
        data: {
          id: Mock.mock('@id'),
          firstName: Mock.mock('@first'),
          lastName: Mock.mock('@last'),
        },
      };
    },
  },
] as MockMethod[];
