export default {
  path: '/main/management/user',
  name: 'user',
  meta: { roles: ['超级管理员', '管理员'] },
  component: () => import('@/views/main/management/user/user.vue')
}