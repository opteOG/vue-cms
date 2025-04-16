import type { character, department, formRule, menu } from '@/type/users';
import Mock from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/main/management/user',
    method: 'get',
    response: () => {
      const number = Mock.mock('@integer(10, 20)');
      const userList = new Array<formRule>();
      for (let i = 1; i <= number; i++) {
        // 模拟数据
        let user: formRule = {} as formRule;
        user.state = Mock.mock({ 'boolean|1-2': true })?.boolean;
        user.phoneNumber = (
          Mock.mock('@natural(10000000001, 19999999999)') as number
        ).toString();
        user.userName = Mock.mock('@first');
        user.trueName = Mock.mock('@cname');
        user.time = Mock.mock('@datetime()');
        userList.push(user);
      }
      return {
        status: 200,
        code: 0,
        data: {
          userList: userList,
        },
      };
    },
  },
  {
    url: '/main/management/department',
    method: 'get',
    response: () => {
      const dpList = new Array<department>();
      const departments = new Array(
        '销售部',
        '安保部',
        '保洁部',
        '人事部',
        '运营部',
        '开发部',
        '网安部',
        '游研部',
      );
      for (let i = 0; i < 8; i++) {
        // 模拟数据
        let dp: department = {} as department;
        dp.name = departments[i];
        dp.leader = Mock.mock('@cname');
        dp.number = Mock.mock('@natural(60, 100)');
        dp.time = Mock.mock('@datetime()');
        dpList.push(dp);
      }
      return {
        status: 200,
        code: 0,
        data: {
          dpList: dpList,
        },
      };
    },
  },
  {
    url: '/main/management/department/search',
    method: 'post',
    response: (name: any) => {
      const departments = new Array(
        '销售部',
        '安保部',
        '保洁部',
        '人事部',
        '运营部',
        '开发部',
        '网安部',
        '游研部',
      );
      if (departments.includes(name?.query.name)) {
        const dp: department = {
          name: name?.query.name,
          leader: Mock.mock('@cname'),
          number: Mock.mock('@natural(60, 100)'),
          time: Mock.mock('@datetime()'),
        };
        return {
          status: 200,
          code: 0,
          data: {
            dp: [dp],
          },
        };
      } else {
        return {
          status: 404,
          message: '没有找到您输入的部门信息',
        };
      }
    },
  },
  {
    url: '/main/management/character',
    method: 'get',
    response: () => {
      const number = Mock.mock('@integer(10, 20)');
      const characterList = new Array<character>();
      const powerList = ['超级管理员', '管理员', '员工', '普通用户'];
      for (let i = 1; i <= number; i++) {
        // 模拟数据
        let character: character = {} as character;
        character.name = Mock.mock('@cname');
        character.startTime = Mock.mock('@datetime()');
        character.endTime = Mock.mock('@datetime()');
        character.power = powerList[Mock.mock('@natural(0, 3)')];
        characterList.push(character);
      }
      return {
        status: 200,
        code: 0,
        data: {
          characterList: characterList,
        },
      };
    },
  },
  {
    url: '/main/management/menu',
    method: 'get',
    response: () => {
      const menuList: menu[] = [
        {
          id: '1',
          name: '系统总览',
          path: '/main/system/',
          time: Mock.mock('@datetime'),
          children: [
            {
              id: '11',
              name: '核心技术',
              path: '/main/system/keytechnology',
              time: Mock.mock('@datetime'),
            },
            {
              id: '12',
              name: '商品统计',
              path: '/main/system/totalcommodity',
              time: Mock.mock('@datetime'),
            },
          ],
        },
        {
          id: '2',
          name: '系统管理',
          path: '/main/management',
          time: Mock.mock('@datetime'),
          children: [
            {
              id: '21',
              name: '用户管理',
              path: '/main/management/user',
              time: Mock.mock('@datetime'),
            },
            {
              id: '22',
              name: '部门管理',
              path: '/main/management/department',
              time: Mock.mock('@datetime'),
            },
            {
              id: '23',
              name: '菜单管理',
              path: '/main/management/menu',
              time: Mock.mock('@datetime'),
            },
            {
              id: '24',
              name: '角色管理',
              path: '/main/management/character',
              time: Mock.mock('@datetime'),
            },
          ],
        },
        {
          id: '3',
          name: '商品中心',
          path: '/main/commodity',
          time: Mock.mock('@datetime'),
          children: [
            {
              id: '31',
              name: '商品类别',
              path: '/main/commodity/commoditykinds',
              time: Mock.mock('@datetime'),
            },
            {
              id: '32',
              name: '商品信息',
              path: '/main/commodity/totalcommodity',
              time: Mock.mock('@datetime'),
            },
          ],
        },
        {
          id: '4',
          name: '个人中心',
          path: '/main/personality',
          time: Mock.mock('@datetime'),
          children: [
            {
              id: '41',
              name: '项目管理',
              path: '/main/personality/project',
              time: Mock.mock('@datetime'),
            },
            {
              id: '42',
              name: '技术堆栈',
              path: '/main/personality/totalcommodity',
              time: Mock.mock('@datetime'),
            },
          ],
        },
      ];
      return {
        status: 200,
        code: 0,
        data: {
          menuList: menuList,
        },
      };
    },
  },
] as MockMethod[];
