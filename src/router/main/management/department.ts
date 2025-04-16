export default {
  path: '/main/management/department',
  name: 'department',
  meta: { roles: ['超级管理员', '管理员'] },
  component: () => import('@/views/main/management/department/department.vue'),
};
