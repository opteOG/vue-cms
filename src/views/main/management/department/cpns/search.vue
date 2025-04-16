<template>
  <div class="search">
    <!-- 1.需要给表单添加model:要检查的数据类型实列 2.rules:表单检查表 -->
    <!-- 需要检查的子元素要添加prop属性-->
    <ElForm class="form" size="default" ref="formEl" :model="dpName" :rules="rules">
      <el-row :gutter="20">
        <el-col :span="6">
          <ElFormItem label="部门名称：" prop="name">
            <ElInput v-model="dpName.name" placeholder="请输入部门名称"  />
          </ElFormItem>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" @click="handleSearch(formEl)"> 搜索 </el-button>
            <el-button @click="handleReflesh(formEl)"> 重置 </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { useManageStore } from '@/stores/manage/manage';
import {
  ElButton,
  ElCol,
  ElForm,
  ElFormItem,
  ElInput,
  ElRow,
  type FormInstance,
  type FormRules,
} from 'element-plus';
import { ref, reactive } from 'vue';

const dpName = reactive<Input>({
  name: '',
});

const manageStore = useManageStore();
const formEl = ref<FormInstance>();


interface Input {
  name: string;
}
const rules = reactive<FormRules<Input>>({
  name: [
    {
      message: '搜索框不能为空',
      trigger: 'blur',
    },
  ],
});

//处理搜索事件
const handleSearch = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    if (valid) {
      manageStore.fetchSearchDpAction(dpName.name)
    }
    else {
      console.log("Error", fields)
    }
  });
};

//处理重置事件
const handleReflesh = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  manageStore.fetchdpListAction()
};
</script>

<style lang="less" scoped>
.search {
  background-color: #ffffff;
  border-radius: 5px;
  padding-top: 22px;
  padding-left: 20px;
}
</style>
