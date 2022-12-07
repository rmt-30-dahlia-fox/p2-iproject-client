import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    baseUrl: 'http://localhost:3000/',
    // baseUrl: 'https://restaurant-api-production-d70c.up.railway.app/',
    // frontUrl: 'http://localhost:8080/',
    frontUrl: 'https://restaurant-api-6e10a.web.app/',
    loginState: localStorage.loginState,
    login: {
      input: '',
      password: ''
    },
    foods: [],
    categories: [],
    favorites: [],
    counterData: {
      f: 0, c: 0, s: 0
    }, 
    filterCode: '',
    pageState: '',
    calledFood: {},
    pageNumber: 1,
    pageCount: 1,
    generatedCode: ''
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },

    async handleLogin(){
      try {
        const {data} = await axios ({
          url: this.baseUrl + 'login',
          method: 'post',
          data: {
            input: this.login.input,
            password: this.login.password
          }
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("id", data.id)
        localStorage.setItem("userName", data.userName)
        localStorage.setItem("email", data.email)
        localStorage.setItem("role", data.role)
        localStorage.setItem("loginState", true)
        this.router.replace('/')
      } catch (error) {
        console.log(error);
      }
    }
  },
})
