import { defineStore } from "pinia"

export const useAdminStore = defineStore('admin', {
  state: () => ({
    isLogin: true
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})