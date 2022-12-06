import { ref, computed } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      name: "Eduardo",
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
  actions: {
    async fetchNewsData() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=96596792c7d74fefb9765035495b3630",
        })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
