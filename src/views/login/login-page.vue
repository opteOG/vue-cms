<template>
  <div class="login-page">
    <div class="login">
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
      <div class="password">
        <div class="remember">
          <ElCheckbox :checked="checked" @change="handleCheckChange" size="large" />
          <p :style="{ color: activeColor }">记住密码</p>
        </div>
        <div class="forgot" @click="handleResetClick">
          <ElLink type="primary">忘记密码</ElLink>
        </div>
      </div>
      <div class="btn" @click="handleLoginClick">
        <ElButton type="primary" style="width: 100%">登录</ElButton>
      </div>
      <div class="register">
        没有账号？
        <ElLink type="primary" @click="handleRegisterClick">立即注册</ElLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElCheckbox, ElIcon, ElInput, ElLink, ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';
import { Lock, User } from '@element-plus/icons-vue';
import router from '@/router/login';
import useLoginStore from '@/stores/login/login';
import type { account } from '@/type/login';

const account = ref('');
const password = ref('');
const checked = ref(JSON.parse(localStorage.getItem('checked') as string));

onMounted(() => {
  if (localStorage.getItem('checked') !== null) {
    checked.value = JSON.parse(localStorage.getItem('checked') as string);
  }
  if (checked.value) {
    account.value = loginStore.account.username;
    password.value = loginStore.account.password;
  }
});

//跳转至注册页面
const handleRegisterClick = () => {
  router.push('/register');
};

//跳转至重置页面
const handleResetClick = () => {
  router.push('/reset');
};

const activeColor = ref('');

const handleCheckChange = () => {
  checked.value = !checked.value;
  if (checked.value) {
    activeColor.value = '#409EFF';
  } else {
    activeColor.value = '#000';
  }
  localStorage.setItem('checked', JSON.stringify(checked.value));
};

const loginStore = useLoginStore();
//处理登录点击事件
const handleLoginClick = () => {
  if (
    account.value === loginStore.account.username &&
    password.value === loginStore.account.password
  ) {
    const token = JSON.parse(localStorage.getItem('token') as string);
    if (token !== null) {
      loginStore.dispatchLoginAction();
      router.push('/main').then(() => {
        if (!checked.value) {
          localStorage.removeItem('token');
        }
      });
    } else {
      ElMessage({ message: '密码或账号输入错误，请重新输入', type: 'error' });
    }
  } else {
    ElMessage({ message: '密码或账号输入错误，请重新输入', type: 'error' });
  }
};
</script>

<style lang="less" scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../../assets/img/login-bg.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;

  .login {
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
    }

    .password {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      font-size: 14px;
      .remember {
        display: flex;
        align-items: center;
        .el-checkbox.el-checkbox--large {
          height: 14px;
        }
      }
    }

    .btn {
      margin-top: 20px;
    }

    .register {
      margin-top: 30px;
    }
  }
}
</style>
