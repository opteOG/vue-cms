<template>
  <div class="totalcommmodity">
    <HeaderCart />
    <ElRow :gutter="20" :style="`margin-bottom: 20px`">
      <ElCol :span="7">
        <PieEchart :data="pieData"></PieEchart>
      </ElCol>
      <ElCol :span="10">
        <MapEchart></MapEchart>
      </ElCol>
      <ElCol :span="7">
        <RoseEchart :data="roseData"></RoseEchart>
      </ElCol>
    </ElRow>
    <ElRow :gutter="20" :style="`margin-bottom: 20px`">
      <ElCol :span="12">
        <AreaEchart :data="areaData"></AreaEchart>
      </ElCol>
      <ElCol :span="12">
        <BarEchart :data="barData"></BarEchart>
      </ElCol>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
import useSystemSotre from '@/stores/system/system';
import { computed } from 'vue';
import HeaderCart from './cpns/header-cart.vue';
import { ElCol, ElRow } from 'element-plus';
import PieEchart from '@/components/page-echart/pie-echart.vue';
import { storeToRefs } from 'pinia';
import type { areaData, barData, pieData, roseData } from '@/type/system';
import AreaEchart from '@/components/page-echart/area-echart.vue';
import BarEchart from '@/components/page-echart/bar-echart.vue';
import RoseEchart from '@/components/page-echart/rose-echart.vue';
import MapEchart from '@/components/page-echart/map-echart.vue';

const systemStore = useSystemSotre();
systemStore.fetchCommodityDataAction();
//饼状图数据
const { pieData } = storeToRefs(useSystemSotre());
//面积图数据
const areaData = computed<areaData>(() => {
  const names = new Array();
  const numbers = new Array();

  if (pieData.value.dataList) {
    for (const item of pieData.value.dataList!!) {
      names.push(item.name)
      numbers.push(item.value)
    }
  }

  return {
    names: names,
    numbers: numbers,
  };
});
//柱状图数据
const barData = computed<barData>(() => {
  return areaData.value
})
//玫瑰图数据
const roseData = computed<pieData>(() => {
  return pieData.value
})
</script>

<style lang="less" scoped>
.totalcommmodity {
}
</style>
