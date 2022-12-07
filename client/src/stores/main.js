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
    },
    async register(obj) {
      try {
        const {email, password, username, address, phoneNumber} = obj

        const result = await axios({
          method: 'post',
          url: this.baseUrl + '/users/register',
          data: {
            email,
            password,
            username, 
            address, 
            phoneNumber
          }
        });

        const {data} = await axios({
          method: 'post',
          url: this.baseUrl + '/users/login',
          data: {
            email,
            password
          }
        });

        localStorage.setItem('access_token', data.access_token)
        this.router.replace('/')
      } catch(err) {
        console.log(err)
      }
    },
    async login(obj) {
      try {
        const {email, password} = obj

        const {data} = await axios({
          method: 'post',
          url: this.baseUrl + '/login',
          data: {
            email,
            password
          }
        });

        localStorage.setItem('access_token', data.access_token)
        this.router.replace('/')
      } catch(err) {
        console.log(err)
      }
    },
    async addOrder(obj) {
      try {
        console.log(obj)

        const {data} = await axios({
          method: 'post',
          url: this.baseUrl + '/transactions',
          data: {
            obj
          },
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log(data)
      } catch(err) {
        console.log(err)
      }
    }

  },
})