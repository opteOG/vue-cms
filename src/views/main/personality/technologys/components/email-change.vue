<template>
  <ElWatermark content="greenteck">
    <div class="password-change">
      <div class="item">
        <h3>旧邮箱</h3>
        <ElInput v-model="value1" type="password" show-password></ElInput>
      </div>
      <div class="item">
        <h3>新邮箱</h3>
        <ElInput v-model="value2" type="password" show-password></ElInput>
      </div>
      <ElButton size="default" type="primary">保存</ElButton>
    </div>
  </ElWatermark>
</template>

<script setup lang="ts">
import { ElButton, ElInput, ElWatermark } from 'element-plus';
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>

<style lang="less" scoped>
.password-change {
  padding: 20px;
  height: 603px;
  .item {
    margin-bottom: 20px;
    h3 {
      margin-bottom: 10px;
    }
  }
}
</style>
