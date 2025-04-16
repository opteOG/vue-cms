import { accountLogin } from '@/service/modules/login';
import { tokenRegister } from '@/service/modules/register';
import type { account, loginAccount, menu } from '@/type/login';
import { defineStore } from 'pinia';

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    firstName: '',
    lastName: '',
    account: {
      username: '',
      password: '',
      email: '',
    },
    menus: new Array<menu>(),
  }),
  actions: {
    async dispatchLoginAction() {
      const res: loginAccount = await (await accountLogin())?.data?.data;
      this.id = res.id;
      this.firstName = res.firstName;
      this.lastName = res.lastName;
    },
    async tokenRegisterAction() {
      const res = (await tokenRegister()).data;
      this.menus = res.data.menus;
      return res.data;
    },
    accountChangeAction(account: account) {
      this.account.password = account.password;
      this.account.username = account.username;
      this.account.email = account.email;
    },
  },
  persist: {
    storage: sessionStorage,
  },
});

export default useLoginStore;
