import useLoginStore from '@/stores/login/login';
import { storeToRefs } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../../views/main/main-page.vue'),
      children: [],
    },
    {
      path: '/login',
      component: () => import('../../views/login/login-page.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../../views/not-found/not-found.vue'),
    },
    {
      path: '/register',
      component: () => import('../../views/register/register-page.vue'),
    },
    {
      path: '/reset',
      component: () => import('../../views/reset-password/reset-password.vue'),
    },
    {
      path: '/notallow',
      component: () => import('../../views/not-allow/not-allow.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token'); // 获取 Token
  const loginStore = useLoginStore();
  const { account } = storeToRefs(loginStore); // 获取用户信息
  const role = localStorage.getItem('role') || ''; // 防止 null 报错

  //  1. 如果访问login、register、notallow，直接放行
  if (to.path === '/login' || to.path === '/register' || to.path === '/notallow') {
    return next();
  }

  //  2. 未登录用户，跳转到 `/login`
  if (!token || !account.value.username) {
    return next({ path: '/login' });
  }

  //  3. 访问 `/main` 时，重定向到默认管理页面
  if (to.path === '/main') {
    return next({ path: '/main/system/totalcommodity' });
  }

  //  4. 角色权限验证，确保 `to.meta.roles` 也是数组
  const routeRoles = Array.isArray(to.meta.roles) ? to.meta.roles : [to.meta.roles];

  //  只有需要权限的路由才检查角色
  if (routeRoles.length && !routeRoles.includes(role)) {
    return next({ path: '/notallow' }); // 无权限，跳转到拒绝页面
  }

  //  5. 其他情况，正常跳转
  next();
});

export default router;
