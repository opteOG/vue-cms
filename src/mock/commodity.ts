import type { goodsType, goodType } from '@/type/main';
import Mock from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/commodity', // 请求的 URL
    method: 'get', // 请求的方法
    response: () => {
      //轮播图片地址
      const imgUrl = [
        'https://img0.baidu.com/it/u=1347047099,3283571538&fm=253&fmt=auto&app=138&f=PNG?w=1371&h=500',
        'https://img2.baidu.com/it/u=3353065097,666824721&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=418',
        'https://img0.baidu.com/it/u=2689108215,1268222461&fm=253&fmt=auto&app=138&f=JPEG?w=937&h=500',
        'https://img0.baidu.com/it/u=2528816140,1578470085&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=188',
        'https://img0.baidu.com/it/u=2794811381,26875995&fm=253&fmt=auto&app=138&f=JPEG?w=1280&h=433',
      ];

      const dataList: goodsType[] = [];

      for (let i = 0; i < 5; i++) {
        const itemList: goodType[] = [];
        const num = Mock.mock('@integer(2, 6)');

        for (let j = 0; j < num; j++) {
          const i: goodType = {
            name: Mock.mock('@cword(2)'),
            price: Mock.mock('@float(60, 100, 1, 2)'),
            num: Mock.mock('@integer(10, 100)'),
          };
          itemList.push(i);
        }

        const item: goodsType = {
          imgUrl: imgUrl[i],
          itemList: itemList,
        };

        dataList.push(item);
      }

      return {
        code: 0,
        data: {
          dataList: dataList,
        },
      };
    },
  },
] as MockMethod[];
