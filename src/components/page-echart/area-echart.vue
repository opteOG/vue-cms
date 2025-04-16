<template>
  <div class="area-echart">
    <BaseEchart :options="option"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import BaseEchart from './base-echart.vue';
import { computed } from 'vue';
import type { areaData } from '@/type/system';

interface Iprops {
  data: areaData;
}

const props = defineProps<Iprops>();

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props?.data?.names,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: props?.data?.numbers,
        type: 'line',
        areaStyle: {},
      },
    ],
  };
});
</script>

<style lang="less" scoped>
.area-echart {
  color: red;
}
</style>
