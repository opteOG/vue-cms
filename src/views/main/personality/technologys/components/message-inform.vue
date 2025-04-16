<template>
  <div class="message-inform">
    <div class="header">
      <span :class="[status ? 'active' : '', 'read']" @click="statusChangeHandle"
        >未读消息{{ messageData?.readList.length }}</span
      >
      <span :class="[!status ? 'active' : '', 'readed']" @click="statusChangeHandle"
        >已读消息{{ messageData?.readedList.length }}</span
      >
      <ElDivider></ElDivider>
    </div>
    <div class="body">
      <template v-if="status" v-for="(item, index) in messageData?.readList">
        <div class="item">
          <p class="content">{{ item.content }}</p>
          <p class="time">{{ item.time }}</p>
          <ElButton type="primary" size="default" @click="handleMessage(index)"
            >标为已读</ElButton
          >
        </div>
      </template>
      <template v-else v-for="(item, index) in messageData?.readedList">
        <div class="item">
          <p class="content">{{ item.content }}</p>
          <p class="time">{{ item.time }}</p>
          <ElButton type="danger" size="default" @click="deleteMessage(index)"
            >删除</ElButton
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/stores/main/main';
import { ElButton, ElDivider } from 'element-plus';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { messageData } = storeToRefs(useMainStore());
const status = ref(true);

//处理状态切换事件
const statusChangeHandle = () => {
  status.value = !status.value;
};
//处理已读事件
const handleMessage = (index: number) => {
  const item = messageData.value?.readList[index];
  messageData.value?.readedList.push(item!);
  messageData.value?.readList.splice(index, 1);
};
//处理删除事件
const deleteMessage = (index: number) => {
  messageData.value?.readedList.splice(index, 1);
};
</script>

<style lang="less" scoped>
.message-inform {
  padding: 20px;
  .header {
    font-size: 16px;
    margin-top: 20px;

    span {
      padding: 10px;
      border-top: 1px solid #e2e2e2;
      border-right: 1px solid #e2e2e2;
      border-left: 1px solid #e2e2e2;
      cursor: pointer;
    }
    .el-divider--horizontal {
      margin-top: 10px;
    }
  }
  .body {
    margin-top: 20px;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      .content {
        width: 50%;
        color: #43c3ff;
        cursor: pointer;
      }
      .time {
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .item:hover {
      background-color: #ecf1f1;
    }
  }

  .active {
    color: #43c3ff;
  }
}
</style>
