<template>
  <div class="password-change">
    <div class="item">
      <h3>旧密码</h3>
      <ElInput v-model="value1" type="password" show-password></ElInput>
    </div>
    <div class="item">
      <h3>新密码</h3>
      <ElInput v-model="value2" type="password" show-password></ElInput>
    </div>
    <div class="item">
      <h3>确认新密码</h3>
      <ElInput v-model="value3" type="password" show-password></ElInput>
    </div>
    <ElButton size="default" type="primary" @click="handleSave">保存</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElInput, ElNotification } from 'element-plus';
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');

const handleSave = () => {
  if(value1.value === '' || value2.value === '' || value3.value === '') {
    return
  }

  if (value2.value === value3.value && value2.value !== '') {
    ElNotification({
      message: '密码修改成功',
      type: 'success',
    });
    value1.value = ''
    value2.value = ''
    value3.value = ''
  } else {
    ElNotification({
      message: '两次密码输入不一致，请重新输入',
      type: 'error',
    });
  }
};
</script>

<style lang="less" scoped>
.password-change {
  padding: 20px;
  .item {
    margin-bottom: 20px;
    h3 {
      margin-bottom: 10px;
    }
  }
}
</style>
