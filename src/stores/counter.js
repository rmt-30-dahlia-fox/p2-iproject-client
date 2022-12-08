import { defineStore } from "pinia"
import axios from "axios"
import Toastify from "toastify-js"

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
      favoriteList: [],
      isSpinner: false,
      userDetail: [],
      fileUpload: "",
      googleEmail : "",
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

    async googleSignInOnLoad(response) {
      try {
        const { credential } = response
        const googleToken = await axios({
          method: "POST",
          url: `${this.baseUrl}/google-login`,
          headers: { "google-oauth-token": credential },
        })
        localStorage.setItem("access_token", googleToken.data.access_token)
        this.googleEmail = googleToken.data.email
        this.loggedIn = true
        this.openToast(googleToken.data.message)
        this.router.push("/")
      } catch (error) {
        this.openToast(error.response.data.message)
      }
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
        // console.log(this.covidData)
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

    async register({ email, password }) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${this.baseUrl}/register`,
          data: { email, password },
        })
        this.openToast("Successfully register!")
      } catch (error) {
        this.openToast(error)
      }
    },

    async login({ email, password }) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${this.baseUrl}/login`,
          data: { email, password },
        })

        localStorage.setItem("access_token", data.access_token)
        this.loggedIn = true
        this.fetchUserDetail()
        this.router.replace("/")
        this.openToast("Succesfully logged in!")
      } catch (error) {
        this.openToast(error)
      }
    },

    logout() {
      localStorage.clear()
      this.loggedIn = false
      this.router.replace("/login")
      this.openToast("Successfully logged out")
    },

    async addFavorites({ title, description, urlToImage, url }) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${this.baseUrl}/favorites`,
          data: { title, description, urlToImage, url },
          headers: { access_token: localStorage.getItem("access_token") },
        })
      } catch (error) {
        console.log(error)
      }
    },

    async fetchFavorite() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/favorites`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        this.favoriteList = data.FavoritesList
      } catch (error) {
        this.openToast(error)
      }
    },

    async deleteFavorite(id) {
      try {
        await axios({
          method: "DELETE",
          url: `${this.baseUrl}/favorites/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        this.openToast("Successfully delete Favorite")
        this.fetchFavorite()
        this.isSpinner = false
      } catch (error) {
        this.isSpinner = false
        this.openToast(error)
      }
    },

    async fetchUserDetail() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/user-detail`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        this.userDetail = data
        console.log(this.userDetail)
      } catch (error) {
        this.isSpinner = false
      }
    },
  },
})
