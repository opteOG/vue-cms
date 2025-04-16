<template>
  <ElConfigProvider :locale="zhCn">
    <div class="app">
      <RouterView></RouterView>
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>
