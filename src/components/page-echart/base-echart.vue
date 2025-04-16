<template>
  <div class="base-echarts">
    <ElCard  shadow="hover">
      <template #header>
        <h2>商品统计</h2>
      </template>
      <div class="echart" ref="echartRef"></div>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import { ElCard } from 'element-plus';
import { onMounted, ref, watchEffect } from 'vue';
import chinaMap from '@/utils/china';

interface Iprops {
  options: EChartsOption;
}
const props = defineProps<Iprops>();
const echartRef = ref<HTMLElement>();

onMounted(() => {
  const echartInstance = echarts.init(echartRef.value, 'light', {
    renderer: 'canvas',
    locale: 'ZH'
  }
);
  echarts.registerMap('china', chinaMap)
  watchEffect(() => {
    echartInstance.setOption(props.options);
  })
});


</script>

<style lang="less" scoped>
.base-echarts {
  .echart {
    height: 300px;
  }
}
</style>
