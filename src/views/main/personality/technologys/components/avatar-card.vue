<template>
  <div class="avatarCart">
    <!--个人信息展示卡片-->
    <el-card shadow="hover">
      <div class="avatar"></div>
      <ElAvatar :fit="'cover'" :src="AvatarUrl" :size="100"> </ElAvatar>
      <div class="content">
        <h2 class="name">{{ account.username || "greenteck"  }}</h2>
        <p class="email">邮箱：{{ account.email || "teckgreen89@gmail.com" }}</p>
        <div class="icons">
          <img class="icon" src="@/assets/img/github.png" alt="">
          <img class="icon" src="@/assets/img/qq.png" alt="">
          <img class="icon" src="@/assets/img/微信.png" alt="">
          <img class="icon" src="@/assets/img/csdn.png" alt="">
        </div>

        <div class="text">
          <ElDivider></ElDivider>
          <div class="part">
            <div class="part1">
              <p>关注</p>
              <h2>1,456</h2>
            </div>
            <el-divider direction="vertical" />
            <div class="part2">
              <p>收藏</p>
              <h2>456</h2>
            </div>
            <el-divider direction="vertical" />
            <div class="part3">
              <p>发布</p>
              <h2>632</h2>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElAvatar, ElCard, ElDivider } from 'element-plus';
import AvatarUrl from '@/assets/img/avatar.jpg';
import { storeToRefs } from 'pinia';
import useLoginStore from '@/stores/login/login';

const { account } = storeToRefs(useLoginStore())


</script>

<style lang="less" scoped>
.avatarCart {
  position: relative;
  .el-card {
    --el-card-padding: 0px;
    --el-fill-color-blank: #f4f4f4;
  }

  .avatar {
    height: 200px;
    width: 100%;
    background: url(@/assets/img/bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
  }

  .el-avatar {
    position: absolute;
    margin: 0 auto;
    top: 150px;
    left: 0;
    right: 0;
    border: 5px solid #fff;
  }

  .content {
    margin-top: 60px;
    text-align: center;
    padding: 20px;

    .email {
      margin-top: 20px;
    }
    .icons {
      margin-top: 40px;

      .icon {
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }
    }
    .text {
      margin-top: 40px;
      .part {

        .el-divider--vertical {
          height: auto;
        }

        display: flex;
        justify-content: space-around;
        margin-top: 30px;
      }
      margin-bottom: 40px;
    }
  }
}
</style>
