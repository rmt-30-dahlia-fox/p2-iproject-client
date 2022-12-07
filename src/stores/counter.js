import { ref, computed } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      // all these properties will have their type inferred automatically
      baseUrl: "http://localhost:3000",
      newsList: [],
      covidData: [],
      loading: false,
      loadPict: false,
      appointmentList: [],
      loggedIn: false,
    }
  },
  actions: {
    openToast(message) {
      Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "black",
          color: "white",
        },
        onClick: function () {},
      }).showToast()
    },

    async fetchNewsData() {
      try {
        this.loadPict = true
        const { data } = await axios({
          method: "GET",
          url: "https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=96596792c7d74fefb9765035495b3630",
        })
        this.newsList = data.articles
      } catch (error) {
        console.log(error)
      } finally {
        this.loadPict = false
      }
    },

    async fetchCovidData() {
      try {
        this.loading = true
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/covid-data`,
        })
        this.covidData = data.list_data
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async fetchAppointment() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/appointment`,
        })
        this.appointmentList = data.findAppointment
      } catch (error) {
        console.log(error)
      }
    },

    async register(body) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${this.baseUrl}/register`,
          data: body,
        })
        this.router.push("/login")
        this.openToast("Successfully register!")
      } catch (error) {
        this.openToast(error.response.data.message)
      }
    },

    async login(body) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${this.baseUrl}/login`,
          data: body,
        })
        localStorage.setItem("access_token", data.access_token)
        this.loggedIn = true
        this.router.replace("/")
        this.openToast("Succesfully logged in!")
      } catch (error) {
        this.openToast(error.response.data.message)
      }
    },

    async logout() {
      localStorage.clear()
      this.loggedIn = false
      this.router.push("/login")
      this.openToast("Successfully logged out")
    },

    async addFavorites({ title, description, urlToImage }) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${this.baseUrl}/favorites`,
          headers: { access_token: localStorage.getItem("access_token") },
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
})
