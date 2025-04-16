<template>
  <div class="pie-echart">
    <BaseEchart :options="option"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import BaseEchart from './base-echart.vue';
import type { pieData } from '@/type/system';
import { computed } from 'vue';

interface Iprops {
  data: pieData;
}
const props = defineProps<Iprops>();

const option = computed<EChartsOption>(() => {
  return {
    title: {
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props?.data?.dataList,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
});
</script>

<style lang="less" scoped>
.pie-echart {
}
</style>
