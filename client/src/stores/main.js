import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => (
    { 
       baseUrl: 'http://localhost:3000',
       cities: [],
       hotels: [],
       totalHotels: '',
    }
  ),
  getters: {
    
  },
  actions: {
    async fetchCities() {
      try {

        const {data} = await axios({
          method: 'get',
          url: this.baseUrl + '/cities',
        });

        this.cities = data

      } catch(err) {
        console.log(err)
      }

    },
    async fetchHotels(obj) {
      try {
          const {city, date_checkin, date_checkout, page} = obj

        const {data} = await axios({
          method: 'get',
          url: this.baseUrl + '/hotels',
          params: {
            city,
            date_checkin,
            date_checkout,
            page
          }
        });
        console.log(data)
        this.hotels = data.finalData
        this.totalHotels = data.length

      } catch(err) {
        console.log(err)
      }
    }
  },
})