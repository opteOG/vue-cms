<template>
  <div class="userList">
    <div class="header">
      <h2>部门列表</h2>
    </div>
    <el-table
      :data="dpList"
      style="width: 100%"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
    >
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="部门名称" />
      <el-table-column prop="leader" label="部门领导" />
      <el-table-column prop="number" label="员工人数" />
        <el-table-column prop="time" label="创建时间" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useManageStore } from '@/stores/manage/manage';
import type { department } from '@/type/users';
import { ElTableColumn, type FormInstance, type FormRules } from 'element-plus';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

const manageStore = storeToRefs(useManageStore());
const dpList = manageStore.dpList


let form = reactive<department>({
  name: '',
  leader: '',
  number: '',
  time: '',
});
</script>

<style lang="less" scoped>
.userList {
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 5px;
    background-color: var(--el-bg-color);
  }
}
</style>
