import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    baseUrlApi: "https://digimon-api.vercel.app/api/digimon",
    loginStatus: false,
    levels: [],
    digimons: [],
    carts: [],
    histories: [],
    levelSort: "",
    search: "",
    card: "",
    totalPrice: 0,
    currentPage: ref(1),
    activeDigimons: [],
    totalPage: 0,
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

    async fetchDigimon() {
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

        this.digimons = data.map((el) => {
          if (el.level === "In Training") {
            el.price = 1;
          } else if (el.level === "Fresh") {
            el.price = 1;
          } else if (el.level === "Rookie") {
            el.price = 2;
          } else if (el.level === "Armor") {
            el.price = 3;
          } else if (el.level === "Champion") {
            el.price = 3;
          } else if (el.level === "Ultimate") {
            el.price = 4;
          } else if (el.level === "Mega") {
            el.price = 5;
          }
          return el;
        });

        const start = (this.currentPage - 1) * 12;
        this.totalPage = data.length;

        const paginatedDigimons = this.digimons.slice(start, start + 12);

        this.activeDigimons = paginatedDigimons;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Can't find that Digimon",
        });
      }
    },

    paginate() {
      const start = (this.currentPage - 1) * 12;
      const paginatedDigimons = this.digimons.slice(start, start + 12);
      this.activeDigimons = paginatedDigimons;
    },

    async fetchCart() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/cart",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.carts = data.cards;

        for (let i = 0; i < this.carts.length; i++) {
          this.totalPrice += Number(this.carts[i].price);
        }

        console.log(data.cards);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async addCartHandler(card) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/cart",
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
          data: card,
        });
        this.fetchCart();
        Swal.fire({
          icon: "success",
          title: "Card Successfully added to Shopping Cart",
        });
        console.log(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async deleteCartHandler(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/cart/" + id,
          method: "delete",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.totalPrice = 0;
        this.fetchCart();
        Swal.fire({
          icon: "success",
          title: "Card successfully remove from Shopping Cart",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async fetchDetailCard(name) {
      try {
        const { data } = await axios({
          url: this.baseUrlApi + "/name/" + name,
          method: "get",
        });
        this.card = data[0];

        if (this.card.level === "In Training") {
          this.card.price = 1;
        } else if (this.card.level === "Fresh") {
          this.card.price = 1;
        } else if (this.card.level === "Rookie") {
          this.card.price = 2;
        } else if (this.card.level === "Armor") {
          this.card.price = 3;
        } else if (this.card.level === "Champion") {
          this.card.price = 3;
        } else if (this.card.level === "Ultimate") {
          this.card.price = 4;
        } else if (this.card.level === "Mega") {
          this.card.price = 5;
        }
      } catch (error) {
        this.router.push("/digimon-card/404-not-found");
      }
    },

    async fetchOrderHistory() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/order-history",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.histories = data.orders;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async addOrderHandler(card) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/pay",
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
          data: card,
        });
        this.fetchOrderHistory();
        Swal.fire({
          icon: "success",
          title: "Your Payment is successfull",
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
