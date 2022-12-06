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
      isLoading: false,
    }
  },
  actions: {
    async fetchNewsData() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=96596792c7d74fefb9765035495b3630",
        })
        this.newsList = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },

    async fetchCovidData() {
      try {
        this.isLoading = true
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/covid-data`,
        })
        this.covidData = data.list_data
        console.log(data)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
  },
})
