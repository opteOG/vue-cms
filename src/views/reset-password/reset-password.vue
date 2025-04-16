<template>
  <div class="register-page">
    <div class="register">
      <div class="title">
        <h2>重置密码</h2>
        <p class="text">输入你的邮箱，我们将发送重置密码邮件</p>
      </div>
      <div class="input">
        <div class="email">
          <ElInput
            v-model="email"
            placeholder="  邮箱  "
            size="large"
            input-style="height: 40px; width: 100%"
          >
            <template #prefix>
              <ElIcon :size="32">
                <Message />
              </ElIcon>
            </template>
          </ElInput>
        </div>
      </div>
      <div class="btn" @click="handleBtnClick">
        <ElButton type="primary" style="width: 100%">发送邮件</ElButton>
        <el-alert
          v-show="isError"
          type="error"
          description="您输入的邮箱格式错误，请重新输入"
          :closable="false"
        />
      </div>
      <div class="return" @click="handleReturnClick">
        <ElButton style="width: 100%">返回登录</ElButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElAlert, ElButton, ElIcon, ElInput, ElMessage } from 'element-plus';
import { ref } from 'vue';
import { Message } from '@element-plus/icons-vue';
import emailFormatCheck from '@/utils/emailFormatCheck';
import router from '@/router/login';

const email = ref('');
const isError = ref(false);

const handleReturnClick = () => {
  router.push('/login');
};

const handleBtnClick = () => {
  if (emailFormatCheck(email.value)) {
    ElMessage({ type: 'success', message: '邮件发送成功，请注意查收', duration: 3500 });
    isError.value = false;
  } else {
    isError.value = true;
  }
};
</script>

<style lang="less" scoped>
.register-page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../../assets/img/login-bg.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;

  .register {
    width: 350px;
    height: 250px;
    padding: 50px;
    background-color: white;
    border-radius: 5px;

    .title {
      text-align: center;
      .text {
        margin-top: 15px;
        color: #676767;
      }
    }

    .input {
      margin-top: 40px;
      :deep(.el-input .el-input__icon) {
        width: 20px;
      }

      :deep(.el-icon svg) {
        height: 20px;
        width: 20px;
        font-size: 18px;
      }

      .user {
        margin-bottom: 20px;
      }
      .email {
        margin-bottom: 20px;
      }
    }

    .btn {
      margin-top: 20px;
      .el-button + .el-button {
        margin-left: 0px;
      }
      margin-bottom: 20px;
    }

    .return {
      margin-top: 20px;
    }
  }
}
</style>
