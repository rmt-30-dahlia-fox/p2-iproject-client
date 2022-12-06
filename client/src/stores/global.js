import { defineStore } from 'pinia';
import axios from 'axios';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    baseUrl: `http://localhost:3000/customers/`,
    isLoggedIn: false,
    isLoad: false,
    user: {},
    isSidebarOpen: false,
    products: [],
    brands: []
  }),
  getters: {
  },
  actions: {
    async registerHandler(data){
      try {
        if(data.password !== data.confirmPassword){
          throw("Unmatching password");
        }
        this.isLoad = true;
        await axios({
          method: "POST",
          url: `${this.baseUrl}register`,
          data
        })
        this.router.push('/login')
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        console.log(error);
      }
    },
    async loginHandler(login){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "POST",
          url: `${this.baseUrl}login`,
          data: {
            email: login.email,
            password: login.password
          }
        })
        localStorage.setItem("access_token", data.access_token);
        this.isLoggedIn = true;
        this.fetchUserData();
        this.router.push('/');
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        console.log(error);
      }
    },
    async fetchUserData(){
      try {
        this.isLoad = true;
        const{data} = await axios({
          method: "GET",
          url: `${this.baseUrl}users`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.user = data;
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        console.log(error);
      }
    },
    async fetchProducts(filter){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "GET",
          url: `${this.baseUrl}products`,
          params: filter
        })
        this.products = data;
        this.fetchBrand();
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        console.log(error);
      }
    },
    fetchBrand(){
      this.products.forEach(el=>{
        if(this.brands.findIndex(brand=>brand === el.brand) === -1){
          this.brands.push(el.brand);
        }
      })
    }
  }
})