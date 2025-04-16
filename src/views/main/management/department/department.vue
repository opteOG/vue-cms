<template>
    <div class="department">
      <Search></Search>
      <Content></Content>
    </div>
</template>

<script setup lang="ts">
import { useManageStore } from '@/stores/manage/manage';
import Content from './cpns/content.vue';
import Search from './cpns/search.vue';
import { onMounted } from 'vue';

onMounted(() => {
  const manageStore = useManageStore()
  manageStore.fetchdpListAction()
})


</script>

<style lang="less" scoped>
.department {

}
</style>