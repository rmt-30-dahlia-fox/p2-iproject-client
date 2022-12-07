import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    baseUrlApi: "https://digimon-api.vercel.app/api/digimon",
    loginStatus: false,
    levels: [],
    digimons: [],
    levelSort: "",
    search: "",
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

    async registerHandler(value) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/register",
          method: "post",
          data: {
            email: value.email,
            password: value.password,
          },
        });

        this.router.push("/login");

        Swal.fire({
          icon: "success",
          title: "Success Create an Account!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async loginHandler(value) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: {
            email: value.email,
            password: value.password,
          },
        });

        localStorage.access_token = data.access_token;
        this.loginStatus = true;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          title: "Welcome to Archon Digi Card!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async handleOnGoogleLogin(response) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/google-sign-in",
          method: "post",
          headers: {
            "google-oauth-token": response.credential,
          },
        });

        localStorage.access_token = data.access_token;
        this.loginStatus = true;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          title: "Welcome to Archon Digi Card!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async fetchDigimon(page) {
      try {
        let urlParam = this.baseUrlApi;
        if (this.levelSort) {
          urlParam += "/level/" + this.levelSort;
        }
        if (this.search) {
          urlParam += "/name/" + this.search;
        }
        const { data } = await axios({
          url: urlParam,
          method: "get",
        });

        if (page === 1) {
          this.digimons = data[0];
        } else {
          this.digimons = data;
        }
        console.log(this.digimons.length, "<<<<<");
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
});
