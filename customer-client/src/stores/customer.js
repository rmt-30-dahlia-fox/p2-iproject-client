import { defineStore } from "pinia";
import axios from "axios";
export const useCustomerStore = defineStore("customer", {
  state: () => ({
    baseUrl: "http://localhost:3000/customer",
    isLogin: true,
    formStep: 1,
    orderForm: {
      pickupLocation: "",
      pickupDate: "",
      pickupTime: "",
      returnLocation: "",
      returnDate: "",
      returnTime: "",
      totalPrice: "",
      UnitId: "",
    },

    registerForm: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      identityType: "",
      identityNumber: "",
    },

    loginForm: {
      email: "",
      password: "",
    },

    units: [],

    unit: {},

    orders: [],
  }),
  actions: {
    async loginHandler() {
      try {
        if (localStorage.access_token) {
          this.isLogin = true;
          this.router.push({ name: "home" });
          await this.fetchUnit();
          await this.fetchOrders();
        } else {
          await this.fetchUnit();
          this.isLogin = false;
          this.router.push({ name: "home" });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchUnit() {
      try {
        const { data } = await axios.get(this.baseUrl + "/units");
        this.units = data.units;
      } catch (error) {
        console.log(error);
      }
    },

    async register() {
      try {
        console.log(this.registerForm);
        const { data } = await axios.post(
          this.baseUrl + "/register",
          this.registerForm
        );
        await this.router.push({ name: "login" });
        console.log("register successfull");
      } catch (error) {
        console.log(error);
      }
    },

    async login() {
      try {
        const { data } = await axios.post(
          this.baseUrl + "/login",
          this.loginForm
        );
        localStorage.setItem("access_token", data.access_token);
        await this.loginHandler();
        await this.router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    },

    async logout() {
      try {
        localStorage.removeItem("access_token");
        await this.loginHandler();
      } catch (error) {
        console.log(error);
      }
    },

    async postOrder() {
      try {
        const { data } = await axios.post(
          this.baseUrl + "/orders",
          this.orderForm,
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        (this.orderForm = {
          pickupLocation: "",
          pickupDate: "",
          pickupTime: "",
          returnLocation: "",
          returnDate: "",
          returnTime: "",
          totalPrice: "",
          UnitId: "",
        }),
          await this.router.push({ name: "home" });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async getUnitById(id) {
      try {
        const { data } = await axios.get(this.baseUrl + "/units/" + id);
        this.unit = data.unit;
      } catch (error) {
        console.log(error);
      }
    },

    async getPrice() {
      try {
        await this.getUnitById(this.orderForm.UnitId);

        const date1 = new Date(this.orderForm.pickupDate);
        const date2 = new Date(this.orderForm.returnDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(this.unit.price);
        const totalPrice = this.unit.price * diffDays;
        console.log(totalPrice);
        return totalPrice;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchOrders() {
      try {
        const { data } = await axios.get(this.baseUrl + "/orders", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.orders = data.orders;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
