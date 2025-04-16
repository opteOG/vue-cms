<template>
  <div class="register-page">
    <div class="register">
      <div class="title">
        <div>
          <img src="../../assets/img/favicon.png" alt="" />
        </div>
        <p class="text">凌云管理</p>
      </div>
      <div class="input">
        <div class="user">
          <ElInput
            v-model="account"
            placeholder="  用户名  "
            size="large"
            input-style="height: 40px; width: 100%;"
          >
            <template #prefix>
              <ElIcon :size="32">
                <User />
              </ElIcon>
            </template>
          </ElInput>
        </div>
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
        <div class="password">
          <ElInput
            v-model="password"
            placeholder="  密码  "
            size="large"
            input-style="height: 40px; width: 100%"
            :show-password="true"
          >
            <template #prefix>
              <ElIcon :size="32">
                <Lock />
              </ElIcon>
            </template>
          </ElInput>
        </div>
      </div>
      <div class="btn" @click="handleBtnClick">
        <ElButton type="primary" style="width: 100%">注册</ElButton>
      </div>
      <div class="login">
        已有账号，
        <ElLink type="primary" @click="handleLoginClick">立即登录</ElLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElIcon, ElInput, ElLink, ElMessage } from 'element-plus';
import { ref } from 'vue';
import { Lock, Message, User } from '@element-plus/icons-vue';
import router from '@/router/login';
import emailFormatCheck from '@/utils/emailFormatCheck';
import type { account } from '@/type/login';
import useLoginStore from '@/stores/login/login';

const account = ref('');
const email = ref('');
const password = ref('');

const handleLoginClick = () => {
  router.push('/login');
};
//处理注册点击事件
const loginStore = useLoginStore();
const handleBtnClick = () => {
  if (emailFormatCheck(email.value) && account.value !== '' && password.value !== '') {
    //发送注册请求 缓存token
    loginStore
      .tokenRegisterAction()
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('role', res.role);
      })
      .then(() => {
        const accounter: account = {
          username: account.value,
          email: email.value,
          password: password.value,
        };
        loginStore.accountChangeAction(accounter);
      });
    router.push('/login').then(() => {
      ElMessage({ type: 'success', message: '注册成功，请登录', duration: 3500 });
    });
  } else {
    ElMessage({ type: 'error', message: '您输入的邮箱格式错误，请重新输入' });
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
    width: 400px;
    height: 350px;
    padding: 50px;
    background-color: white;
    border-radius: 5px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      .text {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
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
    }

    .login {
      margin-top: 30px;
    }
  }
}
</style>
