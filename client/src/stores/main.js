import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => (
    { 
       baseUrl: 'https://travel-alliance-production.up.railway.app',
       cities: [],
       hotels: [],
       totalHotels: '',
       pendingTransactions: [],
       paidTransactions: [],
       paidTransactions: [],
       selectedHotel: {},
       transactionStatus: 'pending',
       loginStatus: false,
       totalPrice: '',
       quantity: ''
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
        this.loginStatus = true
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
          url: this.baseUrl + '/users/login',
          data: {
            email,
            password
          }
        });

        localStorage.setItem('access_token', data.access_token)
        this.loginStatus = true
        this.router.replace('/')
      } catch(err) {
        console.log(err)
      }
    },
    async logout() {
      localStorage.clear()
      this.loginStatus = false
      // window.location.reload()
      this.router.replace('/')
    },
    async addOrder(obj) {
      try {
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
    },
    async getPendingTransactions () {
      try {
        const {data} = await axios({
          method: 'get',
          url: this.baseUrl + '/transactions/pending',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.pendingTransactions = data
        this.transactionStatus = 'pending'

      } catch(err) {
        console.log(err)
      }
    },
    async getPaidTransactions() {
      try {

        const {data} = await axios({
          method: 'get',
          url: this.baseUrl + '/transactions/paid',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.paidTransactions = data
        this.transactionStatus = 'paid'


      } catch(err) {
        console.log(err)
      }
    },
    async deleteOrder(id) {
      try {
        console.log(id)
        const {data} = await axios({
          method: 'delete',
          url: this.baseUrl + `/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(data)
        await this.getPendingTransactions()

      } catch(err) {
        console.log(err)
      }
    },
    async paymentWithStripe(pendingTransaction) {
      try {
        const {data} = await axios({
          method: 'post',
          url: this.baseUrl + `/payments/stripe`,
          headers: {
            access_token: localStorage.access_token,
            'Content-application': 'application/json'
          },
          data: {
            pendingTransaction
          }
        })
        localStorage.setItem('verification', data.randomNumber)
        window.open(data.url, '_blank')

      } catch(err) {
        console.log(err)
      }
    },
    async successPayment(id, randomNumber) {
      try {
        console.log(localStorage.verification, randomNumber)
        if(localStorage.verification !== randomNumber) throw('Forbidden')
        const {data} = await axios({
          method: 'patch',
          url: this.baseUrl + `/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        })

        localStorage.removeItem('verification')
        this.getPendingTransactions()
        this.router.replace('/transaction')
      } catch(err) {
        console.log(err)
      }
    },
    async handleCredentialResponse(response) {
      try {
          const {data} = await axios({
              method: 'POST',
              url: this.baseUrl + '/users/google-login',
              headers: {
                  'google-oauth-token': response.credential
              }
          })

         
          this.loginStatus = true
          localStorage.access_token = data.access_token
          
          await this.fetchCities()

          this.router.push('/')

      } catch (err) {
        console.log(err)
      }
  },
    

  },
})