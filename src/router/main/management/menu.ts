export default {
  path: '/main/management/menu',
  name: 'menu',
  meta: { roles: ['超级管理员', '管理员', '员工', '普通用户'] },
  component: () => import('@/views/main/management/menu/menu.vue'),
};
