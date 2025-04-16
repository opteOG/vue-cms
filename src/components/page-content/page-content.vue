<template>
  <div class="userList">
    <div class="header">
      <h2>数据列表</h2>
    </div>
    <el-table
      :data="dataList"
      style="width: 100%"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
      :border="contentConfig.border ?? false"
      row-key="id"
      :default-expand-all="contentConfig.defaultExpandAll ?? false"

    >
      <el-table-column type="index" label="序号" width="65" />
      <template v-for="item in contentConfig.columns" :key="item.prop">
        <el-table-column :prop="item.prop" :label="item.label"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ElTableColumn } from 'element-plus';

type Iprops = {
  contentConfig: {
    columns: any[];
    border?: boolean
    defaultExpandAll?: boolean
  };
  dataList: any;
}

const props = defineProps<Iprops>();
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
