<template>
    <div class="character">
      <page-search :search-config="searchConfig"></page-search>
      <page-content :content-config="contentConfig" :data-list="characterList"></page-content>
    </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue';
import searchConfig from './config/search.config';
import PageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';
import { onMounted } from 'vue';
import { useManageStore } from '@/stores/manage/manage';
import { storeToRefs } from 'pinia';

const { characterList } = storeToRefs(useManageStore())


onMounted(() => {
  const manageStore = useManageStore()
  manageStore.fetchCharacterListAction()
})


</script>

<style lang="less" scoped>

</style>