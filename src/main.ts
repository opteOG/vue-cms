import './assets/css/index.less';
import 'normalize.css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router/login';
import { pinia } from './stores';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import type { RouteRecordRaw } from 'vue-router';
import roleDirective from './directives/role';

// 生产环境使用mock开启：production mock server
if (process.env.NODE_ENV === 'production') {
  import('@/mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer();
  });
}

const app = createApp(App);
// 注册指令
app.directive('role', roleDirective);

//全局注册Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);

//注册路由
function routeRegister() {
  const moduleFiles: Record<string, any> = import.meta.glob('./router/main/**/*.ts', {
    eager: true,
  });

  const localRoutes: RouteRecordRaw[] = [];
  for (const key in moduleFiles) {
    localRoutes.push(moduleFiles[key].default);
  }
  for (const route of localRoutes) {
    router.addRoute('main', route);
  }
}
routeRegister();
app.use(router);
app.use(ElementPlus, { size: 'large' });

app.mount('#app');
