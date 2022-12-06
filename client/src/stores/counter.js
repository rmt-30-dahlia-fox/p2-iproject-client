import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // baseUrl: "https://sipri-movie.up.railway.app",
    baseUrl: "http://localhost:3000",
    dataManga : ""


  }),
  actions: {
    async registerHandler(dataRegister) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: {
            email: dataRegister.email,
            password: dataRegister.password,
            username: dataRegister.username,
            phoneNumber: dataRegister.phoneNumber,
            address: dataRegister.address
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/')    

      } catch (error) {
        console.log(error);
        // this.handleError(error)

      }
    },
    async loginHandler(dataLogin) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/')

      } catch (error) {
        console.log(error);
        this.handleError(error)

      }
    },
    async fetchMangaList(req, res, next) {
      try {
        const mangaList = await axios({
          method: 'get',
          url: 'https://api.myanimelist.net/v2/manga/ranking?ranking_type=all&limit=40',
          headers: {
            "X-MAL-CLIENT-ID": "aad45b6564954e88533f9ad51291a312"
          }

        })
        console.log(mangaList);

        res.status(200).json('ok')
      } catch (error) {
        console.log(error);
      }
    },
    logOut() {
      localStorage.clear()

      this.router.push('/login')
    },
    async googleLogin(response) {
      try {
        const { data } = await axios ({
          method: "post",
          url: this.baseUrl + "/public/google-sign-in",
          headers: {
            "google_oauth_token": response.credential
          }
        })
        localStorage.setItem("access_token", data.access_token);
        this.router.push('/')

      } catch (error) {
        console.log(error);
        // this.handleError(error);

      }
    },
    handleError(error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`
      })
    },



  },
  getters: {}
}

)
