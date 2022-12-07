import { defineStore } from "pinia";
import axios from 'axios'

export const useGlobalStore = defineStore('global', {
  state: () => ({ 
    baseUrl: 'http://localhost:3000',
    isLogin: false,
    user: {},
    activities: [],
    exercises: {
      currentPage: 1,
      exercises: []
    },
    loginForm: {
      email: '',
      password: ''
    }
   }),
  getters: {
    
  },
  actions: {
    async fetchExercises() {
      try {
        const params = {}

        params.page = this.exercises.currentPage

        const { data } = await axios.get(this.baseUrl + '/exercises', {
          headers: { access_token: localStorage.access_token },
          params
        })

        this.exercises = data
      } catch (error) {
        console.log(error);
      }
    },

    async fetchActivities() {
      try {
        const { data } = await axios.get(this.baseUrl + '/activities', {
          headers: { access_token: localStorage.access_token }
        })

        this.activities = data.data
      } catch (error) {
        console.log(error);  
      }
    },

    async fetchUserLogin(id) {
      const { data } = await axios.get(this.baseUrl + '/users/' + id, {
        headers: { access_token: localStorage.access_token }
      })

      this.user = data
    },

    checkIsLogin() {
      if(localStorage.access_token) {
        this.isLogin = true
        this.fetchUserLogin(localStorage.userId)
      }
    },

    goToProfile() {
      this.router.push(`/profile/${this.user.id}`)
    },

    async handleLogin() {
      try {
        const { data } = await axios.post(this.baseUrl + '/login', {
          email: this.loginForm.email,
          password: this.loginForm.password
        })

        localStorage.access_token = data.access_token
        localStorage.userId = data.userId
        this.isLogin = true
        this.fetchUserLogin(data.userId)

        this.router.push('/home')
      } catch (error) {
        console.log(error);
      }
    }
  },
})