// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
// import router from '../router'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://p2-c3-movies-production.up.railway.app",
    status: 'Login'
  }),
  actions: {
    async loginCustomer(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/publics/login',
          method: 'post',
          data: payload
        })
        localStorage.setItem('access_token', data.access_token)
        this.status = 'Logout'
        this.router.push('/')
      } catch (error) {
        // console.log('ini clg di loginCustomer() stores');
        const msg = error.response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${msg}`
        })
      }
    },
    async registerCustomer(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/publics/register',
          method: 'post',
          data: payload
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },

    async loginGoogle(credential) {
      try {
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/publics/google-login',
          headers: { google_token: credential }
        })
        // console.log(data);
        localStorage.setItem('access_token', data.access_token)

        this.status = 'Logout'
        this.router.push('/')
      } catch (error) {
        console.log(error);
        // const msg = error.response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error}`
        })
      }
    },

    login() {
      this.router.push('/login')
    },

    logout() {
      this.status = 'Login'
      localStorage.clear();
      this.router.push('/')
    },
  }
})

// router.beforeEach(async (to, from, next) => {
//   if (localStorage.access_token) {
//     status = "Logout"
//     next()
//   } else {
//     status = "Login"
//     next()
//   }
// })
