<template>
  <div class="userList">
    <div class="header">
      <h2>用户列表</h2>
      <ElButton type="primary" size="default" @click="handleAddUser">添加</ElButton>
    </div>
    <el-table
      :data="userList"
      style="width: 100%"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
    >
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="userName" label="用户名" />
      <el-table-column prop="trueName" label="真实姓名" />
      <el-table-column prop="phoneNumber" label="手机号码" />
      <el-table-column prop="state" label="状态">
        <template #default="scope">
          <ElButton
            v-if="scope.row.state"
            :disabled="true"
            size="default"
            type="success"
            >启用中</ElButton
          >
          <ElButton v-else :disabled="true" size="default" type="danger"
            >未启用</ElButton
          >
        </template>
      </el-table-column>
      <el-table-column prop="time" label="入职时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            color="#e3e5fa"
          >
            编辑
          </el-button>
          <el-button
            size="small"
            @click="handleDelete(scope.$index, scope.row)"
            color="#e3e5fa"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!--表单修改对话框-->
  <el-dialog
    v-model="dialogFormVisible"
    title="编辑"
    :close-on-click-modal="false"
    width="500"
  >
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="140">
        <el-input v-model="form.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="真实姓名" :label-width="140">
        <el-input v-model="form.trueName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电话号码" :label-width="140">
        <el-input v-model="form.phoneNumber" autocomplete="off" />
      </el-form-item>
      <el-form-item label="创建时间" prop="time" :label-width="140">
        <ElDatePicker
          type="datetime"
          v-model="form.time"
          value-format="YYYY-MM-DD hh:mm:ss"
          placeholder="请选择日期和时间"
        ></ElDatePicker>
      </el-form-item>
      <el-form-item label="状态" :label-width="140">
        <el-switch v-model="form.state" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false"> 取消 </el-button>
        <el-button type="primary" @click="dialogFormVisible = false"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
  <!--表单添加对话框-->
  <el-dialog
    v-model="dialogAddVisible"
    title="添加"
    :close-on-click-modal="false"
    width="500"
  >
    <el-form :model="newForm" :rules="rules" ref="formEl">
      <el-form-item label="用户名" :label-width="140" prop="userName">
        <el-input v-model="newForm.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="真实姓名" :label-width="140" prop="trueName">
        <el-input v-model="newForm.trueName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电话号码" :label-width="140" prop="phoneNumber">
        <el-input v-model="newForm.phoneNumber" autocomplete="off" />
      </el-form-item>
      <el-form-item label="创建时间" prop="time" :label-width="140">
        <ElDatePicker
          type="datetime"
          v-model="newForm.time"
          value-format="YYYY-MM-DD hh:mm:ss"
          placeholder="请选择日期和时间"
          default-value=""
        ></ElDatePicker>
      </el-form-item>
      <el-form-item label="状态" :label-width="140">
        <el-switch v-model="newForm.state" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogAddVisible = false"> 取消 </el-button>
        <el-button type="primary" @click="handleCheck(formEl)"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useManageStore } from '@/stores/manage/manage';
import type { formRule } from '@/type/users';
import {
  ElButton,
  ElTableColumn,
  type FormInstance,
  type FormRules,
} from 'element-plus';
import { storeToRefs } from 'pinia';
import { ref, reactive } from 'vue';

const manageStore = storeToRefs(useManageStore());
const userList = manageStore.userList;
const dialogFormVisible = ref(false);
const dialogAddVisible = ref(false);
const isAdd = ref(false); //判断是否为添加按钮点击
const formEl = ref<FormInstance>();

let form = reactive<formRule>({
  userName: '',
  trueName: '',
  state: false,
  phoneNumber: '',
  time: '',
});
const newForm = ref<formRule>({
  userName: '',
  trueName: '',
  state: false,
  phoneNumber: '',
  time: '',
});

//表单检查表
const rules = reactive<FormRules<formRule>>({
  userName: [
    {
      required: true,
      message: '用户名不能为空',
      min: 1,
      trigger: 'blur',
    },
  ],
  trueName: [
    {
      required: true,
      message: '真实姓名不能为空',
      trigger: 'blur',
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: '电话号码不能为空',
      trigger: 'blur',
    },
  ],
  time: [
    {
      required: true,
      type: 'date',
      message: '请选择入职时间',
      trigger: 'change',
    },
  ],
});

//处理编辑按钮点击事件
const handleEdit = (index: number, row: formRule) => {
  dialogFormVisible.value = true;
  form = row;
  isAdd.value = false;
};
//处理删除按钮点击事件
const handleDelete = (index: number, row: formRule) => {
  const arr = userList.value?.splice(index, 1);
};
//处理添加按钮点击事件
const handleAddUser = () => {
  //重置
  newForm.value.phoneNumber = '';
  newForm.value.state = false;
  newForm.value.time = '';
  newForm.value.trueName = '';
  newForm.value.userName = '';
  dialogAddVisible.value = true;
};
//处理确认按钮点击事件
async function handleCheck(ruleFormRef: FormInstance | undefined) {
  if (!ruleFormRef) return;
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      dialogAddVisible.value = false;
      userList.value?.push({ ...newForm.value });
    } else {
      console.log('Error', fields);
    }
  });
}
</script>

<style lang="less" scoped>
.userList {
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 5px;
    background-color: var(--el-bg-color);
  }
}
</style>
