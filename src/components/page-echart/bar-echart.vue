<template>
  <div class="area-echart">
    <BaseEchart :options="option"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import BaseEchart from './base-echart.vue';
import type { barData } from '@/type/system';
import { computed } from 'vue';

interface Iprops {
  data: barData;
}

const props = defineProps<Iprops>()

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      data: props.data.names,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: props.data.numbers,
        type: 'bar',
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
