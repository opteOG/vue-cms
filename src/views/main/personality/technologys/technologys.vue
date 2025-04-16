<template>
  <div class="technologys">
    <el-row :gutter="20">
      <el-col :span="10">
        <AvatarCard></AvatarCard>
      </el-col>
      <el-col :span="14" style="">
        <ModificationCard></ModificationCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/stores/main/main';
import AvatarCard from './components/avatar-card.vue';
import ModificationCard from './components/modification-card.vue';
import { ElRow, ElCol } from 'element-plus';

const mainStore = useMainStore()
mainStore.fetchMessageAction()


</script>

<style lang="less" scoped>
.technologys {
}
</style>
