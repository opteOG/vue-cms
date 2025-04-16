export default {
  path: '/main/personality/technologys',
  name: 'technologys',
  meta: { roles: ['超级管理员', '管理员', '员工'] },
  component: () => import('@/views/main/personality/technologys/technologys.vue'),
};
