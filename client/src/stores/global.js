import { defineStore } from 'pinia';
import axios from 'axios';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    baseUrl: `http://localhost:3000/customers/`,
    isLoggedIn: false,
    isLoad: false,
    user: {},
    isSidebarOpen: false,
    products: [],
    brands: [],
    dealers: [],
    product: {},
    profileContent: "my-car",
    paidTransaction: [],
    allTransaction: [],
    transactionDetail: {},
  }),
  getters: {
  },
  actions: {
    async registerHandler(data){
      try {
        if(data.password !== data.confirmPassword){
          throw("Unmatching password");
        }
        this.isLoad = true;
        await axios({
          method: "POST",
          url: `${this.baseUrl}register`,
          data
        })
        this.router.push('/login');
        this.showNotification("Successfully registered", "success");
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    },
    async loginHandler(login){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "POST",
          url: `${this.baseUrl}login`,
          data: {
            email: login.email,
            password: login.password
          }
        })
        localStorage.setItem("access_token", data.access_token);
        this.isLoggedIn = true;
        this.fetchUserData();
        this.router.push('/');
        this.isLoad = false;
        this.showNotification("Successfully logged in", "success");
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    },
    async fetchUserData(){
      try {
        this.isLoad = true;
        const{data} = await axios({
          method: "GET",
          url: `${this.baseUrl}users`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.user = data;
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    },
    async fetchProducts(filter){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "GET",
          url: `${this.baseUrl}products`,
          params: filter
        })
        this.products = data;
        this.fetchBrand();
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    },
    fetchBrand(){
      this.products.forEach(el=>{
        if(this.brands.findIndex(brand=>brand === el.brand) === -1){
          this.brands.push(el.brand);
        }
      })
    },
    async fetchDealers(){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "GET",
          url: `${this.baseUrl}dealers`
        })
        this.dealers = data;
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    },
    async fetchProductDeteail(id){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "GET",
          url: `${this.baseUrl}products/${id}`
        })
        this.isLoad = false;
        this.product = data;
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    },
    async updateProfile(data){
      try {
        if(data.password !== data.confirmPassword){
          throw("Password unmatching")
        }
        this.isLoad = true;
        await axios({
          method: "PUT",
          url: `${this.baseUrl}users`,
          headers: {
            access_token: localStorage.access_token
          },
          data: { 
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "password": data.password,
            "phoneNumber": data.phoneNumber
          }
        })
        this.fetchUserData();
        this.isLoad = false;
        this.showNotification("Profile successfully updated", "success");
      } catch (error) {
        this.isLoad = false;
        if(error === "Password unmatching"){
          return this.showNotification(error, "error");
        }
        this.showNotification(error.response.data.message, "error");
      }
    },
    async fetchTransaction(status){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "GET",
          url: `${this.baseUrl}transactions/${status}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        if(status === "Paid"){
          this.isLoad = false;
          return this.paidTransaction = data;
        }
        this.allTransaction = data;
        this.isLoad = false;
      } catch (error) {
        this.showNotification(error.response.data.message, "error");
      }
    },
    async getTransactionDetail(id){
      await this.fetchTransaction("Paid");
      this.transactionDetail = this.paidTransaction.find(element => element.id === id);
    },
    async bookCar(id){
      try {
        this.isLoad = true;
        const {data} = await axios({
          method: "POST",
          url: `${this.baseUrl}transactions/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.isLoad = false;
        const transactionId = data.id;
        console.log(data);
        return transactionId;
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    },
    logoutHandler(){
      localStorage.removeItem("access_token");
      this.isSidebarOpen = false;
      this.isLoggedIn = false;
      this.showNotification("Successfully logged out", "success");
      this.router.push('/login');
    },
    formatNumber(number){
      return number.toLocaleString("da-DK")
    },
    showNotification(message, type){
      Swal.fire({
        position: 'top-end',
        toast: true,
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
    },
    async cancelTransaction(id){
      Swal.fire({
        title: 'Are you sure want to cancel this transaction?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        this.isLoad = true;
        axios({
          method: "PATCH",
          url: `${this.baseUrl}transactions/${id}`,
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            status: "Cancel"
          }
        })
          .then(_=>{
            this.showNotification("Succesfully cancel transaction", "success");
            this.fetchTransaction("All");
            this.isLoad = false;
          })
          .catch(error=>{
            this.isLoad = false;
            this.showNotification(error.response.data.message, "error");
          })
      })
    },
    async paymentHandler(id, price, status){
      try {
        let transactionId = id;
        if(status === "new"){
          transactionId = await this.bookCar(id);
        }
        const fetchTransaction = this.fetchTransaction;
        const notification = this.showNotification;
        const baseUrl = this.baseUrl;
        const redirectPage = this.router.push;
        const {data} = await axios({
          method: "POST",
          url: `${this.baseUrl}payments`,
          data: this.user,
          headers: {
            access_token: localStorage.access_token,
            price
          }
        })
        window.snap.pay(data.snapToken, {
          onSuccess: function(result){
            notification("Transaction success!", "success");
            axios({
              method: "PATCH",
              url: `${baseUrl}transactions/${transactionId}`,
              headers: {
                access_token: localStorage.access_token
              },
              data: {
                status: "Paid"
              }
            })
              .then(_=>{
                redirectPage('/profile')
                fetchTransaction("All");
              })
              .catch(err=>{
                notification(error.response.data.message, "error")
              })
          },
          onPending: function(result){
            notification("Wating your payment!" , "question");
          },
          onError: function(result){
            notification("payment failed!" , "error");
          },
          onClose: function(){
            notification('You closed the popup without finishing the payment' , "error");
          }
        })
      } catch (error) {
        this.showNotification(err.response.data.message, "error")
      }
    },
    async sendReview(id, message){
      try {
        this.isLoad = true;
        await axios({
          method: "POST",
          url: `${this.baseUrl}reviews/${id}`,
          data: {
            message
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.isLoad = false;
        this.router.push('/profile');
      } catch (error) {
        this.isLoad = false;
        this.showNotification(error.response.data.message, "error");
      }
    }
  }
})