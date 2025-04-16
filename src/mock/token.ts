import Mock from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/register', // 请求的 URL
    method: 'post', // 请求的方法
    response: () => {
      const roles: string[] = ['超级管理员', '管理员', '员工', '普通用户'];
      return {
        code: 0,
        data: {
          token: Mock.mock('@guid'),
          menus: [
            {
              name: '系统总览',
              path: '/main/system',
              children: [
                {
                  name: '核心技术',
                  path: '/main/system/keytechnology',
                },
                {
                  name: '商品统计',
                  path: '/main/system/totalcommodity',
                },
              ],
            },
            {
              name: '系统管理',
              path: '/main/management',
              children: [
                {
                  name: '用户管理',
                  path: '/main/management/user',
                },
                {
                  name: '部门管理',
                  path: '/main/management/department',
                },
                {
                  name: '菜单管理',
                  path: '/main/management/menu',
                },
                {
                  name: '角色管理',
                  path: '/main/management/character',
                },
              ],
            },
            {
              name: '商品中心',
              path: '/main/commodity',
              children: [
                {
                  name: '商品类别',
                  path: '/main/commodity/commoditykinds',
                },
                {
                  name: '商品信息',
                  path: '/main/commodity/commoditymessage',
                },
              ],
            },
            {
              name: '个人中心',
              path: '/main/personality',
              children: [
                {
                  name: '项目管理',
                  path: '/main/personality/project',
                },
                {
                  name: '技术堆栈',
                  path: '/main/personality/technologys',
                },
              ],
            },
          ],
          role: roles[Mock.mock('@integer(0, 3)')],
        },
      };
    },
  },
] as MockMethod[];
