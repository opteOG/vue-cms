import { personalDataRequest } from "@/service/modules/person";
import { defineStore } from "pinia";
import type { messageData } from "@/type/main";

const useMainStore = defineStore("main", {
  state: () : { Folder: boolean, messageData: messageData | null } => ({
    Folder: false,
    messageData: null,
  }),
  actions: {
    changeFolderAction() {
      this.Folder = !this.Folder
    },
    async fetchMessageAction() {
      const res = await personalDataRequest()
      this.messageData = res.data.data
    }
  }
})

export default useMainStore