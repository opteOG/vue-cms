<template>
  <div class="keytechnologh">
    <div class="keys">
      <h2>技术栈</h2>
      <ul class="list">
        <li>开发工具：<span>Visual Studio Code</span></li>
        <li>编程语言：<span>TypeScript 5.4</span></li>
        <li>构建工具：<span>Vite 5.3</span></li>
        <li>前端框架：<span>Vue 3.4</span></li>
        <li>路由工具：<span>Vue Router 4.3</span></li>
        <li>状态管理：<span>pinia 2.1</span></li>
        <li>UI框架：<span>Element Plus 2.8</span></li>
        <li>可视化：<span>Echarts 5.5</span></li>
        <li>富文本：<span>wangeditor 5.1</span></li>
        <li>工具库：<span>countup.js + screenfull + vue-cropper</span></li>
        <li>CSS预编译：<span>Less</span></li>
        <li>HTTP工具：<span>Axios</span></li>
        <li>数据模拟：<span>mockjs + vite-plugin-mock</span></li>
        <li>代码规范：<span>EditorConfig + Prettier + ESlint</span></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.keytechnologh {
  padding: 20px;
  .keys {
    .list {
      margin-top: 20px;
      margin-left: 17px;
      li {
        margin-bottom: 10px;
        span {
          color: rgb(96, 181, 255);
        }
      }
    }
  }
}
</style>
