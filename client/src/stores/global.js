import { defineStore } from 'pinia';
import axios from 'axios';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    baseUrl: `http://localhost:3000/customers/`,
    isLoggedIn: false,
    isLoad: false
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
    
  }
})