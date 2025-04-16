import getRandomNumber from '@/utils/getRandomNumber';
import Mock from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/personalmessage', // 请求的 URL
    method: 'get', // 请求的方法
    response: () => {
      const read = Mock.mock('@integer(2, 6)');
      const readed = Mock.mock('@integer(1, 4)');
      const readList: { time: string; content: string }[] = [];
      const readedList: { time: string; content: string }[] = [];
      for (let i = 1; i <= read; i++) {
        const item = {
          time: Mock.mock('@date()'),
          content: Mock.mock('@cparagraph(2)'),
        };
        readList.push(item);
      }
      for (let i = 1; i <= readed; i++) {
        const item = {
          time: Mock.mock('@date()'),
          content: Mock.mock('@cparagraph(2)'),
        };
        readedList.push(item);
      }

      return {
        code: 0,
        data: {
          readArrLength: read,
          readList: readList,
          readedArrLength: readed,
          readedList: readedList,
        },
      };
    },
  },
] as MockMethod[];
