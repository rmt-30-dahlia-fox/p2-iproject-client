import { defineStore } from "pinia";
import axios from 'axios'

export const useGlobalStore = defineStore('global', {
  state: () => ({ 
    baseUrl: 'http://localhost:3000',
    isLogin: false,
    loginForm: {
      email: '',
      password: ''
    }
   }),
  getters: {
    
  },
  actions: {
    async handleLogin() {
      try {
        console.log('sampe');
        const { data } = await axios.post(this.baseUrl + '/login', {
          email: this.loginForm.email,
          password: this.loginForm.password
        })

        localStorage.access_token = data.access_token
        this.isLogin = true

        this.router.push('/home')
      } catch (error) {
        console.log(error);
      }
    }
  },
})