import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'
import Toastify from 'toastify-js'

export const useMainStore = defineStore('main', {
  state: () => (
    { 
       baseUrl: 'http://localhost:3000',
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
       quantity: '',
       isLoading: false,
       fullPage: true
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
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
      }

    },
    async fetchHotels(obj) {
      try {
          this.isLoading = true
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
        this.isLoading = false
        this.hotels = data.finalData
        this.totalHotels = data.length

      } catch(err) {
        this.isLoading = false
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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

        await Toastify({
          text: data,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
      } catch(err) {
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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

        window.open(data.url, '_blank')

      } catch(err) {
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
      }
    },
    async successPayment(id, randomNumber) {
      try {
        this.isLoading = true
        const {data} = await axios({
          method: 'patch',
          url: this.baseUrl + `/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            randomNumber
          }
        })
        this.isLoading = false
        this.getPendingTransactions()
        this.router.replace('/transaction')
      } catch(err) {
        this.isLoading = false
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
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
        Toastify({
          text: err,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
      }
  },
    

  },
})