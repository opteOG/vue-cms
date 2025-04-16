export default {
  path: '/main/commodity/commoditymessage',
  name: 'commoditymessage',
  meta: { roles: ['超级管理员', '管理员', '员工', '普通用户'] },
  component: () => import('@/views/main/commodity/commditymessage/commditymessage.vue'),
}