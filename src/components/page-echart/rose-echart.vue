<template>
  <div class="rose-echart">
    <BaseEchart :options="option"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import BaseEchart from './base-echart.vue';
import type { roseData } from '@/type/system';
import { computed } from 'vue';

interface Iprops {
  data: roseData;
}

const props = defineProps<Iprops>();

const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: props?.data?.dataList,
      },
    ],
  };
});
</script>

<style lang="less" scoped>
.rose-echart {
}
</style>
