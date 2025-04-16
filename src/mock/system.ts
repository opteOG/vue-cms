import Mock from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/main/system/totalcommodity',
    method: 'get',
    response: () => {
      return {
        status: 200,
        code: 0,
        data: {
          header: [
            {
              title: '用户访问量',
              num: Mock.mock('@integer(1000, 10000)'),
              icon: 'User',
              color: Mock.mock('@hex()'),
            },
            {
              title: '系统消息',
              num: Mock.mock('@integer(1000, 10000)'),
              icon: 'ChatLineRound',
              color: Mock.mock('@hex()'),
            },
            {
              title: '商品数量',
              num: Mock.mock('@integer(100000, 1000000)'),
              icon: 'Goods',
              color: Mock.mock('@hex()'),
            },
            {
              title: '订单总量',
              num: Mock.mock('@integer(10000, 100000)'),
              icon: 'ShoppingCartFull',
              color: Mock.mock('@hex()'),
            },
          ],
          pieData: {
            height: "300px",
            dataList: [
              {
                value: Mock.mock('@integer(60, 200)'),
                name: '衣服'
              },
              {
                value: Mock.mock('@integer(60, 200)'),
                name: '数码'
              },
              {
                value: Mock.mock('@integer(60, 200)'),
                name: '食品'
              },
              {
                value: Mock.mock('@integer(60, 200)'),
                name: '家电'
              },
              {
                value: Mock.mock('@integer(60, 200)'),
                name: '母婴'
              }
            ]
          }
        },
      };
    },
  },
] as MockMethod[];
