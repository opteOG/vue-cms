import { commodityDataRequest } from '@/service/modules/system';
import type { commodityHeader, pieData } from '@/type/system';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useSystemSotre = defineStore('system', () => {
  const header = ref<commodityHeader[]>([]);
  const pieData = ref<pieData>({});
  async function fetchCommodityDataAction() {
    const res = await commodityDataRequest();
    header.value = res?.data.data.header;
    pieData.value = res?.data.data.pieData;
  }
  return { header, pieData, fetchCommodityDataAction };
}, {
  persist: {
    storage: sessionStorage,
  }
});

export default useSystemSotre;
