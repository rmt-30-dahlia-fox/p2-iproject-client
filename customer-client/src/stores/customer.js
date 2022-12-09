import { defineStore } from "pinia";
import axios from "axios";
export const useCustomerStore = defineStore("customer", {
  state: () => ({
    baseUrl: "https://abrupt-sky-production.up.railway.app/customer",
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

    weather: {
      denpasar: {name: 'Denpasar', cloud_pct: "", temp: ""},
      sanur: { name: 'Sanur', cloud_pct: "", temp: ""},
      kuta: { name: 'Kuta', cloud_pct: "", temp: ""},
    }
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

        this.orderForm = {
          pickupLocation: "",
          pickupDate: "",
          pickupTime: "",
          returnLocation: "",
          returnDate: "",
          returnTime: "",
          totalPrice: "",
          UnitId: "",
        };
        await this.fetchOrders()
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

    async deleteOrder(id) {
      try {
        const { data } = await axios.delete(this.baseUrl + '/orders/' + id, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        await this.fetchOrders()
        console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    },

    async getWeather() {
      try {
        const denpasarWeather = await axios({
          method: 'GET',
          url: 'https://api.api-ninjas.com/v1/weather?city=' + 'denpasar',
          headers: {
            'X-Api-Key': 'zrwGPZDgvbfd2Q6SdnHUKw==on5aMzpcTzaWCMMc',
            'Content-Type': 'application/json',
          }
        })

        const sanurWeather = await axios({
          method: 'GET',
          url: 'https://api.api-ninjas.com/v1/weather?city=' + 'sanur',
          headers: {
            'X-Api-Key': 'zrwGPZDgvbfd2Q6SdnHUKw==on5aMzpcTzaWCMMc',
            'Content-Type': 'application/json',
          }
        })

        const kutaWeather = await axios({
          method: 'GET',
          url: 'https://api.api-ninjas.com/v1/weather?city=' + 'kuta',
          headers: {
            'X-Api-Key': 'zrwGPZDgvbfd2Q6SdnHUKw==on5aMzpcTzaWCMMc',
            'Content-Type': 'application/json',
          }
        })
        
        this.weather.denpasar.cloud_pct = denpasarWeather.data.cloud_pct
        this.weather.denpasar.temp = denpasarWeather.data.temp

        this.weather.kuta.cloud_pct = kutaWeather.data.cloud_pct
        this.weather.kuta.temp = kutaWeather.data.temp

        this.weather.sanur.cloud_pct = sanurWeather.data.cloud_pct
        this.weather.sanur.temp = sanurWeather.data.temp

      } catch (error) {
        console.log(error);
      }
    }
  },

});
