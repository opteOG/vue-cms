<template>
  <div class="commodity-table">
    <h2 class="title">商品分类</h2>
    <el-table :data="goodsData" border stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" align="center" />
      <el-table-column prop="name" label="类别名称" width="150" align="center" />
      <el-table-column label="图片" width="150" align="center">
        <template #default="{ row }">
          <img :src="row.imgUrl" class="item-image" alt="商品图片" />
        </template>
      </el-table-column>
      <el-table-column prop="num" label="销量" width="100" align="center" />
      <el-table-column prop="percentage" label="比重" align="center">
        <template #default="{ row }">
          <el-progress :percentage="getRandomNumber(10, 50)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import useCommodityStore from '@/stores/commodity/commodity';
import getRandomNumber from '@/utils/getRandomNumber';
import { storeToRefs } from 'pinia';

const { goodsData } = storeToRefs(useCommodityStore());
</script>

<style lang="less" scoped>
.commodity-table {
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
