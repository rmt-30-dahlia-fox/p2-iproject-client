// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://p2-c3-movies-production.up.railway.app",
    pageTitle: 'Home',
    foodsResult: [],
    foodDetail: {},
    calNeedResult: {},
    bmrResult: [],
    bmiResult: [],
    articles: [],
  }),
  actions: {
    // Home
    async searchItems(toSearch) {
      try {
        const { data } = await axios({
          method: 'get',
          url: 'https://trackapi.nutritionix.com/v2/search/instant?query=' + toSearch + "&branded=true&common=false&self=false",
          headers: { 'x-app-id': import.meta.env.VITE_NUT_ID, 'x-app-key': import.meta.env.VITE_NUT_KEY }
          //data: 'params',
        });
        this.foodsResult = data.branded;
        // console.log(data);
      } catch (error) {
        console.log(error)
      }
    },
    async getOneItem(nix_item_id) {
      console.log('nix_item_id: ', nix_item_id);
      try {
        const { data } = await axios({
          method: 'get',
          url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${nix_item_id}`,
          headers: { 'x-app-id': import.meta.env.VITE_NUT_ID, 'x-app-key': import.meta.env.VITE_NUT_KEY }
          //data: 'params',
        });
        this.foodDetail = data.foods[0];
        console.log(data.foods[0], '<<<< data in getOne');
      } catch (error) {
        console.log(error)
      }
    },

    // Calculator
    async Calc_CaloriesNeed(params) {
      // console.log(params);
      try {
        const { data } = await axios({
          method: 'get',
          url: `https://hipermega-fitness-calculator.p.rapidapi.com/caloriesneeds?height=${params.height}&weight=${params.weight}&gender=${params.gender}&age=${params.age}&activity=${params.activity}`,
          headers: { 'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY, 'X-RapidAPI-Host': import.meta.env.VITE_RAPID_HOST },
        });
        // console.log(data, '<<<< data from CALC-CaloriesNeed');

        this.calNeedResult = data;
      } catch (error) {
        console.log(error)
      }
    },

    async Calc_BMR(params) {
      // console.log(params);
      try {
        const { data } = await axios({
          method: 'get',
          url: `https://hipermega-fitness-calculator.p.rapidapi.com/bmr?gender=${params.gender}&age=${params.age}&height=${params.height}&weight=${params.weight}`,
          headers: { 'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY, 'X-RapidAPI-Host': import.meta.env.VITE_RAPID_HOST },
        });
        // console.log(data, '<<<< data from CALC-CaloriesNeed');
        // console.log(data[0].bmrResult);
        this.bmrResult = data;
      } catch (error) {
        console.log(error)
      }
    },

    async Calc_BMI(params) {
      // console.log(params);
      try {
        const { data } = await axios({
          method: 'get',
          url: `https://hipermega-fitness-calculator.p.rapidapi.com/bmi?height=${params.height}&weight=${params.weight}`,
          headers: { 'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY, 'X-RapidAPI-Host': import.meta.env.VITE_RAPID_HOST },
        });
        // console.log(data[0].bmiResult);
        this.bmiResult = data;
      } catch (error) {
        console.log(error)
      }
    },

    // Article
    async fetchArticles(params) {
      console.log(params, '<< di fetch articles');
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
          params: params,
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
          }
        });
        // console.log(data[0].bmiResult);
        this.articles = data;
      } catch (error) {
        console.log(error)
      }
    },


    async loginCustomer(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/publics/login',
          method: 'post',
          data: payload
        })
        localStorage.setItem('access_token', data.access_token)
        this.status = 'Logout'
        this.router.push('/')
      } catch (error) {
        // console.log('ini clg di loginCustomer() stores');
        const msg = error.response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${msg}`
        })
      }
    },

    async registerCustomer(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/publics/register',
          method: 'post',
          data: payload
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },

    async loginGoogle(credential) {
      try {
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/publics/google-login',
          headers: { google_token: credential }
        })
        // console.log(data);
        localStorage.setItem('access_token', data.access_token)

        this.status = 'Logout'
        this.router.push('/')
      } catch (error) {
        console.log(error);
        // const msg = error.response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error}`
        })
      }
    },

    login() {
      this.router.push('/login')
    },

    logout() {
      this.status = 'Login'
      localStorage.clear();
      this.router.push('/')
    },
  }
})

// router.beforeEach(async (to, from, next) => {
//   if (localStorage.access_token) {
//     status = "Logout"
//     next()
//   } else {
//     status = "Login"
//     next()
//   }
// })
