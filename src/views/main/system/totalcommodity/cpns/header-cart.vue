<template>
  <div class="header">
    <ElRow :gutter="20" :style="`margin-bottom: 20px`">
      <template v-for="(item, index) of header">
        <ElCol :span="6">
          <ElCard shadow="hover">
            <ElRow>
              <ElCol
                :span="10"
                :style="`background-color: ${item?.color}; padding: 20px`"
              >
                <ElIcon :size="48" :color="'#ffffff'">
                  <component :is="item?.icon"></component>
                </ElIcon>
              </ElCol>
              <ElCol :span="14">
                <div class="content">
                  <h2 :id="item?.icon" class="number" :style="`color: ${item?.color}`">
                    {{ item?.num }}
                  </h2>
                  <p class="title">{{ item?.title }}</p>
                </div>
              </ElCol>
            </ElRow>
          </ElCard>
        </ElCol>
      </template>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
import useSystemSotre from '@/stores/system/system';
import { ElCard, ElCol, ElIcon, ElRow } from 'element-plus';
import { storeToRefs } from 'pinia';
import { User, ShoppingCartFull, Goods, ChatLineRound } from '@element-plus/icons-vue';
import { CountUp } from 'countup.js';
import { watch, nextTick } from 'vue';

const { header } = storeToRefs(useSystemSotre());

// dom更新完成后执行动画
watch(header, () => {
  nextTick(() => {
  const countUp1 = new CountUp(header.value[0].icon, header.value[0].num, {startVal: 1000})
  const countUp2 = new CountUp(header.value[1].icon, header.value[1].num, {startVal: 1000})
  const countUp3 = new CountUp(header.value[2].icon, header.value[2].num, {startVal: 1000})
  const countUp4 = new CountUp(header.value[3].icon, header.value[3].num, {startVal: 1000})
  countUp1.start()
  countUp2.start()
  countUp3.start()
  countUp4.start()
  })
})


</script>

<style lang="less" scoped>
.header {
  .el-card {
    --el-card-padding: 0;
  }
  .el-col-10 {
    flex: 0 0 0 !important;
    max-width: 41.6666666667%;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 48px;
    margin-left: 40px;
    .title {
      color: #6b6b6b;
    }
    .number {
      font-weight: 600;
      font-size: 32px;
    }
  }
}
</style>
