<template>
  <div class="modificationCart">
    <!--个人信息修改卡片-->
    <el-card shadow="hover">
      <ElRow>
        <ElCol :span="6">
          <ElMenu active-text-color="#222" :default-active="'0'">
            <ElMenuItem index="0" @click="() => index = 0">
              消息通知
            </ElMenuItem>
            <ElMenuItem index="1" @click="() => index = 1">
              我的头像
            </ElMenuItem>
            <ElMenuItem index="2" @click="() => index = 2">
              修改密码
            </ElMenuItem>
            <ElMenuItem index="3" @click="() => index = 3">
              修改邮箱
            </ElMenuItem>
          </ElMenu>
        </ElCol>
        <ElCol :span="18">
          <MessageInform v-if="index === 0"></MessageInform>
          <AvatarChange v-else-if="index === 1"></AvatarChange>
          <PasswordChange v-else-if="index === 2"></PasswordChange>
          <EmailChange v-else-if="index === 3"></EmailChange>
        </ElCol>
      </ElRow>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElCard, ElCol, ElMenu, ElMenuItem, ElRow } from 'element-plus';
import MessageInform from './message-inform.vue';
import AvatarChange from './avatar-change.vue';
import PasswordChange from './password-change.vue';
import EmailChange from './email-change.vue';
import { ref } from 'vue';

const index = ref(0);



</script>

<style lang="less" scoped>
.modificationCart {
  .el-card, .el-menu {
    height: 603px;
    --el-card-padding: 0px;
    --el-fill-color-blank: #f4f4f4;
  }
  .el-menu {
    --el-menu-active-color: #60b4f5 !important;

  }
}
</style>
