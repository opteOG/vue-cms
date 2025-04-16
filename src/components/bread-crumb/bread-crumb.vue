<template>
  <div class="bread-crumb">
    <el-breadcrumb separator-icon="ArrowRight" >
      <el-breadcrumb-item :to="{ path: '/' }">系统首页</el-breadcrumb-item>
      <el-breadcrumb-item class="item" v-for="item in menuList">{{ item }}</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/stores/login/login';
import type { menu } from '@/type/login';
import { ElBreadcrumbItem } from 'element-plus';
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loginStore = useLoginStore();
const menus: menu[] = loginStore.menus;
const menuList = ref<any[]>([]);

//监听路径切换
watch(route, () => {
  menuList.value = []
  for (const menu of menus) {
    for (const item of menu.children) {
      if (item.path === route.path) {
        menuList.value.push(menu.name);
        menuList.value.push(item.name);
        break;
      }
    }
    if (menuList.value.length !== 0) break;
  }
});

onMounted(() => {
  menuList.value = []
  for (const menu of menus) {
    for (const item of menu.children) {
      if (item.path === route.path) {
        menuList.value.push(menu.name);
        menuList.value.push(item.name);
        break;
      }
    }
    if (menuList.value.length !== 0) break;
  }
})
</script>

<style lang="less" scoped>
.bread-crumb {
  --el-text-color-primary: @theme-font-color;

  .item {
    cursor: text;
  }
}
</style>
