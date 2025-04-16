<template>
  <div class="notAllow">
    <h2>很遗憾~~您没有权限访问此页面</h2>
    <div class="btns">
      <ElButton @click="backToMain" size="default" type="primary">返回主页面</ElButton>
      <ElButton @click="backToLast" size="default" type="primary">返回上一页</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/login';
import { ElButton } from 'element-plus';

// 返回主页面
const backToMain = () => {
  router.push('/main/system/totalcommodity');
};
// 返回上一级
const backToLast = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.notAllow {
  text-align: center;
  position: fixed;
  top: 40%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  .btns {
    margin-top: 10px;
  }
}
</style>
