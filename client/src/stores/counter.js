import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    loginStatus: false,
  }),

  getters: {},
  actions: {
    async logoutHandler() {
      try {
        localStorage.clear();
        this.loginStatus = false;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          title: "See You Next Time!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
});
