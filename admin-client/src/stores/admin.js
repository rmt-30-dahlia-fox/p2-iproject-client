import { defineStore } from "pinia";
import axios from "axios";
export const useAdminStore = defineStore("admin", {
  state: () => ({
    baseUrl: "http://localhost:3000/admin",
    isLogin: true,
    formStep: 1,

    registerForm: {
      email: "",
      password: "",
    },

    loginForm: {
      email: "",
      password: "",
    },

    unitForm: {
      model: "",
      type: "",
      price: "",
      imageUrl: "",
    },

    units: [],

    unit: {
      id: "",
      model: "",
      type: "",
      price: "",
      imageUrl: "",
    },

    orders: [],

    orderById: {
      id: "",
      pickupLocation: "",
      pickupDate: "",
      returnLocation: "",
      returnDate: "",
      totalPrice: "",
      status: "",
      CustomerId: "",
      UnitId: "",
      Unit: {
        id: "",
        model: "",
        type: "",
        price: "",
        imageUrl: "",
      },
      Customer: {
        id: "",
        name: "",
        email: "",
        phoneNumber: "",
        identityType: "",
        identityNumber: "",
      },
    },
  }),
  actions: {
    async loginHandler() {
      try {
        if (localStorage.access_token) {
          this.isLogin = true;
          await this.fetchUnit();
          await this.fetchOrders();
        } else {
          this.isLogin = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchUnit() {
      try {
        const { data } = await axios.get(this.baseUrl + "/units", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
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

    async getUnitById(id) {
      try {
        const { data } = await axios.get(this.baseUrl + "/units/" + id, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
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

    async deleteOrder(id) {
      try {
        const { data } = await axios.delete(this.baseUrl + "/orders/" + id, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        await this.fetchOrders();
        console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    },

    async getWeather() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://api.api-ninjas.com/v1/weather?city=" + "denpasar",
          headers: {
            "X-Api-Key": "zrwGPZDgvbfd2Q6SdnHUKw==on5aMzpcTzaWCMMc",
            "Content-Type": "application/json",
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteUnitById(id) {
      try {
        const { data } = await axios.delete(this.baseUrl + "/units/" + id, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchUnit();
        console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchOrderById(id) {
      try {
        const { data } = await axios.get(this.baseUrl + "/orders/" + id, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.orderById = data.order;
        this.router.push({ path: `/orders/${id}` });
      } catch (error) {
        console.log(error);
      }
    },

    async addUnit() {
      try {
        const { data } = await axios.post(
          this.baseUrl + "/units",
          this.unitForm,
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        await this.fetchUnit();
        this.router.push({ name: "units" });
      } catch (error) {
        console.log(error);
      }
    },

    async updateOrderStatus(id, status) {
      try {
        if(status !== this.orderById.status) {
          const { data } = await axios.patch(
            this.baseUrl + "/orders/" + id,
            { status: status },
            {
              headers: {
                access_token: localStorage.access_token,
              },
            }
          );
          await this.fetchOrders();
          this.router.push({ name: "orders" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
