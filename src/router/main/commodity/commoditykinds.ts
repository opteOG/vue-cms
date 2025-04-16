export default {
  path: '/main/commodity/commoditykinds',
  name: 'commoditykinds',
  meta: { roles: ['超级管理员', '管理员', '员工', '普通用户'] },
  component: () => import('@/views/main/commodity/commoditykinds/commoditykinds.vue')
}