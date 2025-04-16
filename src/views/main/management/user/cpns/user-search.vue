<template>
  <div class="search">
    <!-- 1.需要给表单添加model:要检查的数据类型实列 2.rules:表单检查表 -->
    <!-- 需要检查的子元素要添加prop属性-->
    <ElForm class="form" :rules="rules" ref="ruleFormRef" :model="formData">
      <ElRow :gutter="20">
        <ElCol :span="6" :offset="1">
          <ElFormItem label="用户名：" prop="userName">
            <ElInput v-model="formData.userName" placeholder="请输入用户名" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="6">
          <ElFormItem label="真实姓名：" prop="trueName">
            <ElInput v-model="formData.trueName" placeholder="请输入真实姓名" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="6">
          <ElFormItem label="手机号码：" prop="phoneNumber">
            <ElInput v-model="formData.phoneNumber" placeholder="请输入手机号码" />
          </ElFormItem>
        </ElCol>
      </ElRow>

      <ElRow :gutter="20">
        <ElCol :span="6" :offset="1">
          <ElFormItem label="状态：" prop="state">
            <ElSelect v-model="formData.state" placeholder="请选择状态">
              <ElOption label="启用中" :value="true"></ElOption>
              <ElOption label="未启用" :value="false"></ElOption>
            </ElSelect>
          </ElFormItem>
        </ElCol>
        <ElCol :span="10">
          <ElFormItem label="入职时间：" prop="time">
            <ElDatePicker
              type="datetime"
              v-model="formData.time"
              placeholder="请选择日期和时间"
            ></ElDatePicker>
          </ElFormItem>
        </ElCol>
        <ElCol :span="2">
          <ElButton
            type="primary"
            size="default"
            :icon="Search"
            @click="handleSearch(ruleFormRef)"
          >
            搜索
          </ElButton>
        </ElCol>
        <ElCol :span="2">
          <ElButton
            type="primary"
            size="default"
            :icon="Refresh"
            @click="handleReflesh(ruleFormRef)"
          >
            重置
          </ElButton>
        </ElCol>
      </ElRow>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import type { formRule } from '@/type/users'; //数据对象类型
import {
  ElButton,
  ElCol,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElRow,
  ElSelect,
  type FormInstance,
  type FormRules,
} from 'element-plus';
import { reactive, ref } from 'vue';
import { Refresh, Search } from '@element-plus/icons-vue';

//表单元素
const ruleFormRef = ref<FormInstance>();

//数据对象实列
const formData = reactive<formRule>({
  userName: '',
  trueName: '',
  phoneNumber: '',
  time: '',
  state: true,
});

//表单检查表
const rules = reactive<FormRules<formRule>>({
  state: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'blur',
    }
  ],
  trueName: [{ required: true, message: '真实姓名不能为空', trigger: 'blur' }],
});

//处理搜索事件
const handleSearch = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('搜索成功');
    }
  });
};

//处理重置事件
const handleReflesh = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="less" scoped>
.search {
  background-color: #ffffff;
  border-radius: 5px;
  .form {
    padding-top: 20px;
  }
}
</style>
