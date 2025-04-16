import {
  characterRequest,
  departmentRequest,
  departmentSearchRequest,
  menuRequest,
  userDataRequest,
} from '@/service/modules/manage';
import type { character, department, formRule, menu } from '@/type/users';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useManageStore = defineStore('manage', () => {
  const userList = ref<formRule[]>(); //用户列表
  const dpList = ref<department[]>(); //部门列表
  const characterList = ref<character[]>();
  const menuList = ref<menu[]>();
  // 拿取用户数据列表
  async function fetchUserListAction() {
    const res = await userDataRequest();
    userList.value = res?.data?.data.userList;
  }
  // 拿取部门数据列表
  async function fetchdpListAction() {
    const res = await departmentRequest();
    dpList.value = res?.data?.data.dpList;
  }
  // 拿取搜索部门数据结果
  async function fetchSearchDpAction(name: string) {
    const res = await departmentSearchRequest(name);
    if (res.data.status === 200) {
      dpList.value = res?.data?.data.dp;
      return true;
    } else {
      return false;
    }
  }
  // 拿取角色数据列表
  async function fetchCharacterListAction() {
    const res = await characterRequest();
    characterList.value = res?.data?.data.characterList;
  }
  // 拿取菜单数据列表
  async function fetchMenuListAction() {
    const res = await menuRequest();
    menuList.value = res?.data?.data.menuList;
  }
  return {
    userList,
    dpList,
    characterList,
    menuList,
    fetchUserListAction,
    fetchSearchDpAction,
    fetchdpListAction,
    fetchCharacterListAction,
    fetchMenuListAction,
  };
});
