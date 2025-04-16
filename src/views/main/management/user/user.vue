<template>
  <div class="user">
    <UserSearch />
    <UserList />
  </div>
</template>

<script setup lang="ts">
import { useManageStore } from '@/stores/manage/manage';
import UserList from './cpns/user-list.vue';
import UserSearch from './cpns/user-search.vue';
import { onMounted } from 'vue';

onMounted(() => {
  //拿取用户列表数据
  const manageStore = useManageStore()
  manageStore.fetchUserListAction()

})

</script>

<style lang="less" scoped>
.user {

}
</style>