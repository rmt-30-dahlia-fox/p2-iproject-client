import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    baseUrl: 'http://localhost:3000/',
    // baseUrl: 'https://restaurant-api-production-d70c.up.railway.app/',
    // frontUrl: 'http://localhost:8080/',
    frontUrl: 'https://restaurant-api-6e10a.web.app/',

    loginState: false,
    login: {
      input: '',
      password: ''
    },

    loggedUser: {
      name: '',
      photo: '',
      email: '',
      role: '',
    },

    calledCarts: {
      item: [],
      length: 0
    },

    calledCategories: {
      items: [],
      length: 0
    },

    calledProducts: {
      items: [],
      length: 0
    }, 

    pageNumber: 1,
    pageCount: 1,
    filterCode: '',
    searchInput: '',

    member: {
      called: {},
      register: {
        name: '',
        email: '',
        phone: '',
        gender: ''
      }
    },

    

    
    pageState: '',
    calledFood: {},
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
        localStorage.setItem("fullName", data.fullName)
        localStorage.setItem("photo", data.photo)
        localStorage.setItem("email", data.email)
        localStorage.setItem("role", data.role)
        localStorage.setItem("loginState", true)
        this.router.replace('/')
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        })
      }
    },

    handleAuthentication(){
      if (!localStorage.loginState) this.loginState = false
      else this.loginState = true

      if(!this.loginState){
        this.loggedUser.name = ''
        this.loggedUser.photo = ''
        this.loggedUser.email = ''
        this.loggedUser.role = ''
      } else if (this.loginState){
        this.loggedUser.name = localStorage.userName
        this.loggedUser.photo = localStorage.photo
        this.loggedUser.email = localStorage.email
        this.loggedUser.role = localStorage.role
      }
    },

    async handleMember(){
      try {
        const {data} = await axios ({
          url: this.baseUrl + 'members',
          method: 'post',
          data: {
            name: this.member.register.name,
            gender: this.member.register.gender,
            email: this.member.register.email,
            phone: this.member.register.phone
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${this.member.register.name} succesfully registered`,
          showConfirmButton: false,
          timer: 1500
        })
        this.member.register.name = ''
        this.member.register.gender = ''
        this.member.register.email = ''
        this.member.register.phone = ''
        
        setTimeout(() => {
          this.router.replace('/')
        }, 1500)
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        })
      }
    },

    async fetchProducts(filter){
      try {
        let query = ''
        if (filter) {
          query += `&&${filter}`
          this.filterCode = filter.replace("filter=", "")
        }

        const {data} = await axios ({
          url: this.baseUrl + 'products' + `?page=${this.pageNumber}` + query,
          method: 'get',
          headers: { access_token: localStorage.access_token }
        })
        this.calledProducts.items = data.rows
        this.calledProducts.length = data.count

        if (data.count % 6 !== 0) this.pageCount = Math.ceil(data.count / 6)
        else this.pageCount = data.count / 6
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        })
      }
    },

    async fetchCategories(){
      try {
        const {data} = await axios({
          url: this.baseUrl + 'categories',
          method: 'get',
        })
        this.calledCategories.items = data
        this.calledCategories.length = data.length
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error}`,
        })
      }
    }, 
    
    movePage(number, opt){
      if (opt) this.pageNumber += number
      if (!opt) this.pageNumber = number
      this.fetchProducts()
    },
  },
})
