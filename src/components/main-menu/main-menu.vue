<template>
  <div class="main-menu">
    <el-menu
      :unique-opened="true"
      class="menu-content"
      :router="true"
      :default-active="route.path"
      :collapse="isFold"
      @open="navigateTo(route.path)"
    >
      <div class="title">
        <div>
          <img src="../../assets/img/favicon.png" alt="" />
        </div>
        <p class="text" v-show="!isFold">凌云管理</p>
      </div>

      <!-- 1. 系统总览-->
      <ElSubMenu index="system" popper-class="submenu">
        <template #title>
          <el-icon><Monitor /></el-icon>
          <span>系统总览</span>
        </template>
        <el-menu-item
          v-role="['超级管理员', '管理员', '员工', '普通用户']"
          index="/main/system/keytechnology"
          >核心技术</el-menu-item
        >
        <el-menu-item
          v-role="['超级管理员', '管理员', '员工', '普通用户']"
          index="/main/system/totalcommodity"
          >商品统计</el-menu-item
        >
      </ElSubMenu>

      <!-- 2. 系统管理-->
      <ElSubMenu index="management" popper-class="submenu">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item v-role="['超级管理员', '管理员']" index="/main/management/user"
          >用户管理</el-menu-item
        >
        <el-menu-item
          v-role="['超级管理员', '管理员']"
          index="/main/management/department"
          >部门管理</el-menu-item
        >
        <el-menu-item
          v-role="['超级管理员', '管理员', '员工', '普通用户']"
          index="/main/management/menu"
          >菜单管理</el-menu-item
        >
        <el-menu-item
          v-role="['超级管理员', '管理员']"
          index="/main/management/character"
          >角色管理</el-menu-item
        >
      </ElSubMenu>

      <!-- 3. 商品中心-->
      <ElSubMenu index="commodity" popper-class="submenu">
        <template #title>
          <el-icon><ShoppingCart /></el-icon>
          <span>商品中心</span>
        </template>
        <el-menu-item
          v-role="['超级管理员', '管理员', '员工', '普通用户']"
          index="/main/commodity/commoditykinds"
          >商品类别</el-menu-item
        >
        <el-menu-item
          v-role="['超级管理员', '管理员', '员工', '普通用户']"
          index="/main/commodity/commoditymessage"
          >商品信息</el-menu-item
        >
      </ElSubMenu>

      <!-- 4. 个人中心-->
      <ElSubMenu index="personality" popper-class="submenu">
        <template #title>
          <el-icon><User /></el-icon>
          <span>个人中心</span>
        </template>
        <el-menu-item
          v-role="['超级管理员', '管理员', '员工']"
          index="/main/personality/project"
          >报告上传</el-menu-item
        >
        <el-menu-item
          v-role="['超级管理员', '管理员', '员工']"
          index="/main/personality/technologys"
          >个人设置</el-menu-item
        >
      </ElSubMenu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ElSubMenu } from 'element-plus';
import { useRoute } from 'vue-router';

defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();

const navigateTo: (path: string) => void = (path) => {};
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: @theme-color;

  .menu-content {
    --el-menu-bg-color: @theme-color;
    --el-menu-text-color: @theme-font-color;
    --el-menu-hover-bg-color: @theme-hover-bg-color;
    border-right: none !important;

    .title {
      display: flex;
      background-color: @theme-color;
      color: white;
      align-items: center;
      padding-left: 20px;
      img {
        width: 32px;
        height: 32px;
      }

      .text {
        font-size: 20px;
        font-weight: 600;
        padding-left: 25px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        white-space: nowrap;
      }
    }

    .submenu {
      background-color: @theme-color;
    }
  }
}
</style>
