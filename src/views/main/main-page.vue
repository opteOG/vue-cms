<template>
  <div class="home-page" ref="homePage">
    <el-container class="content">
      <el-aside :width="Folder ? '60px' : '240px'">
        <main-menu :isFold="Folder"></main-menu>
      </el-aside>
      <el-container>
        <el-header height="45px">
          <main-header @fold-change="handleFoldChange" @screenfull="handleScreenFull" />
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive
              include="commoditykinds,commoditymessage,character,department,menu,user,project,technologys,keytechnology,totalcommodity"
              :max="11"
            >
              <component :is="Component"></component>
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import useCommodityStore from '@/stores/commodity/commodity';
import { ElMessage } from 'element-plus';
import screenfull from 'screenfull';
import { ref, onMounted, getCurrentInstance } from 'vue';

const Folder = ref(false);
const homePage = ref<Element>();

// 发起网络请求拿取商品信息
const commodityStore = useCommodityStore();
commodityStore.fetchGoodsData();

//处理折叠状态变化
const handleFoldChange = (folder: boolean) => {
  Folder.value = folder;
};
//处理全屏事件
const handleScreenFull = () => {
  if (screenfull.isEnabled) {
    screenfull.request(homePage.value);
  }
};
onMounted(() => {
  const role = localStorage.getItem('role');
  ElMessage(
    {
      message: `本次随机角色——${role}`,
      type: 'success',
      duration: 0,
      showClose: true,
    },
    getCurrentInstance()?.appContext,
  );
});
</script>

<style lang="less" scoped>
.home-page {
  height: 100vh;
  overflow: hidden;
  .el-aside {
    overflow: hidden;
    transition: width 1s ease;
  }

  .content {
    height: 100%;
  }

  .el-header {
    padding: 0;
  }

  .el-main {
    background-color: rgb(239, 245, 254);
  }
}
</style>
