<template>
  <div class="search">
    <!-- 1.需要给表单添加model:要检查的数据类型实列 2.rules:表单检查表 -->
    <!-- 需要检查的子元素要添加prop属性-->
    <ElForm class="form" size="default" ref="formEl" :model="formSearch">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="item.span">
            <el-form-item :label="item.label" :prop="item.prop">
              <!-- input -->
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formSearch[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <!-- date-picker -->
              <template v-else-if="item.type === 'date-picker'">
                <el-date-picker
                  type="datetimerange"
                  v-model="formSearch[item.prop]"
                  :start-placeholder="item.startPlaceholder"
                  :end-placeholder="item.endPlaceholder"
                  format="YYYY-MM-DD HH:mm:ss"
                  date-format="YYYY/MM/DD ddd"
                  time-format="hh:mm:ss"
                >
                </el-date-picker>
              </template>
              <!-- select -->
              <template v-else-if="item.type === 'select'">
                <el-select v-model="formSearch[item.prop]" :placeholder="item.placeholder">
                  <template v-for="option in item.options">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <el-row style="padding-bottom: 22px" justify="end">
        <el-col :span="4">
          <el-button type="primary" :icon="Refresh" @click="handleRefreshClick(formEl)"
            >重置</el-button
          >
          <el-button type="primary" :icon="Search">搜索</el-button>
        </el-col>
      </el-row>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Refresh, Search } from '@element-plus/icons-vue';

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
} from 'element-plus';

interface Iprops {
  searchConfig: {
    formItems: any[];
  };
}
const props = defineProps<Iprops>();
const formEl = ref<FormInstance>();

//初始化表单属性
const initialForm: any = {};
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = '';
}
//表单数据实列
const formSearch = reactive(initialForm);

const handleRefreshClick = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
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
