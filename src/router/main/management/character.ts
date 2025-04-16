export default {
  path: '/main/management/character',
  name: 'character',
  meta: { roles: ['超级管理员', '管理员'] },
  component: () => import('@/views/main/management/character/character.vue'),
};
