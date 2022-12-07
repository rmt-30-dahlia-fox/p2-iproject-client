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
      isLoading: 0,
    }
  },
  actions: {
    async fetchNewsData() {
      try {
        this.isLoading = 2
        const { data } = await axios({
          method: "GET",
          url: "https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=96596792c7d74fefb9765035495b3630",
        })
        this.newsList = data.articles
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = 0
      }
    },

    async fetchCovidData() {
      try {
        this.isLoading = 1
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/covid-data`,
        })
        this.covidData = data.list_data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = 0
      }
    },
  },
})
