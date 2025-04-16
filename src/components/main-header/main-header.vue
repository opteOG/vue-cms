<template>
  <div class="main-header">
    <div class="folder">
      <el-icon v-if="!Folder" size="24px" color="white" @click="handleFolder"
        ><Fold
      /></el-icon>
      <el-icon v-else size="24px" color="white" @click="handleFolder"
        ><Expand
      /></el-icon>

      <BreadCrumb class="breadcrumb"> </BreadCrumb>
    </div>
    <div class="operation">
      <ElBadge :value="12" style="margin-right: 30px">
        <el-icon size="24px" color="white" style="margin-right: 0 !important"
          ><Bell
        /></el-icon>
      </ElBadge>
      <ElBadge :value="200" :max="99" style="margin-right: 30px">
        <el-icon
          size="24px"
          color="white"
          style="margin-right: 0 !important"
          @click="handleMessageClick"
          ><Message
        /></el-icon>
      </ElBadge>
      <el-icon size="24px" color="white"><ChatLineRound /></el-icon>
      <el-icon size="24px" color="white" @click="handleFullScreen"
        ><FullScreen
      /></el-icon>
      <ElAvatar :size="36" style="cursor: pointer">{{ lastName }}</ElAvatar>
      <el-dropdown>
        <span class="username">{{ firstName }}</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>项目仓库</el-dropdown-item>
            <el-dropdown-item>官方文档</el-dropdown-item>
            <el-dropdown-item @click="handlePersonCentreClick"
              >个人中心</el-dropdown-item
            >
            <el-dropdown-item divided @click="handleQuit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/stores/login/login';
import { ElAvatar, ElBadge } from 'element-plus';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import BreadCrumb from '../bread-crumb/bread-crumb.vue';
import router from '@/router/login';

const Folder = ref(false);

const loginStore = useLoginStore();
const { firstName, lastName } = storeToRefs(loginStore);

const emit = defineEmits(['foldChange', 'screenfull']);

const handleFolder = () => {
  Folder.value = !Folder.value;
  emit('foldChange', Folder.value);
};

//退出登录
const handleQuit = () => {
  router.push('/login');
  localStorage.removeItem('token');
};

//个人中心事件点击处理
const handlePersonCentreClick = () => {
  router.push('/main/personality/technologys');
};

//处理全屏点击事件
const handleFullScreen = () => {
  emit('screenfull');
};

//处理信息点击事件
const handleMessageClick = () => {
  router.push('/main/personality/technologys');
};
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: @theme-color;
  --el-text-color-regular: @theme-font-color;
  --el-header-padding: 0;
  --el-bg-color: #ffffff00;
  --el-index-normal: 0;
  height: 45px;
  .folder {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .breadcrumb {
    margin-left: 20px;
  }

  .operation {
    display: flex;
    align-items: center;
    margin-right: 30px;
    .el-icon {
      margin-right: 20px;
      cursor: pointer;
    }
    .username {
      margin-left: 10px;
      cursor: pointer;
    }
    .el-badge__content {
      border: none !important;

    }
  }
}
</style>
