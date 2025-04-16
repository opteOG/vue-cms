import { goodsDataRequest } from '@/service/modules/commodity';
import type { goodsType } from '@/type/main';
import getRandomNumber from '@/utils/getRandomNumber';
import { defineStore } from 'pinia';

const useCommodityStore = defineStore('commodity', {
  state: () => ({
    goodsData: new Array<goodsType>(),
  }),
  actions: {
    async fetchGoodsData() {
      const res = await goodsDataRequest();
      this.goodsData = res?.data?.data.dataList;
      this.goodsData.forEach((item, index) => {
        item.id = index + 1;
        item.name = '商品';
        item.num = 20;
      });
    },
  },
});

export default useCommodityStore;
