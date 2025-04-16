<template>
  <div class="commditymessage">
    <PageContent
      :content-config="contentConfig"
      :data-list="goodsDataMap"
    ></PageContent>
    <div class="btn">
      <ElButton @click="handleChangePrice" type="primary" style="margin-top: 20px"
        >修改商品价格</ElButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';
import { storeToRefs } from 'pinia';
import useCommodityStore from '@/stores/commodity/commodity';
import type { goodType } from '@/type/main';
import { computed } from 'vue';
import { ElButton } from 'element-plus';
import router from '@/router/login';

const { goodsData } = storeToRefs(useCommodityStore());

const goodsDataMap = computed(() => {
  let goods: goodType[] = [];
  for (const item of goodsData.value) {
    goods = goods.concat(item.itemList);
  }
  return goods;
});

//处理商品价格修改事件
const handleChangePrice = () => {
  router.push('/notallow');
};
</script>

<style lang="less" scoped>
.commditymessage {
  font-family: '方正粗圆_GBK';

  .btn {
    display: flex;
    justify-content: end;
  }
}
</style>
