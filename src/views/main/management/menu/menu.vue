<template>
    <div class="menu">
      <PageContent :content-config="contentConfig" :data-list="menuList"></PageContent>
    </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';
import { useManageStore } from '@/stores/manage/manage';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { menuList } = storeToRefs(useManageStore())
onMounted(() => {
  const manageStore = useManageStore()
  manageStore.fetchMenuListAction()
})

</script>

<style lang="less" scoped>
.menu {
}
</style>