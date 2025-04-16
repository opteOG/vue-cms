export default {
  path: '/main/system/keytechnology',
  name: 'keytechnology',
  meta: { roles: ['超级管理员', '管理员', '员工', '普通用户'] },
  component: () => import('@/views/main/system/keytechnology/keytechnology.vue'),
};
