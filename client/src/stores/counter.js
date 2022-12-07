import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: "http://localhost:3000",
    dataManga : "",
    foundManga : "",
    mangaDetail : "",
    loggedIn : false,
    search : ""
    
  }),
  actions: {
    async findManga() {
      try {
        this.foundManga = ""
        console.log('>>>',this.search);
        const {data} = await axios({
          method: 'post',
          url: this.baseUrl + '/findManga',
          data : {
            search : this.search
          }
        })
        this.foundManga = data.data
        this.router.push('/findManga')

        console.log(this.foundManga );
      } catch (error) {
        console.log(error);
      }
    },

    async googleLogin(response) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/google-sign-in",
          headers: {
            "google_oauth_token": response.credential
          }
        })
        localStorage.setItem("access_token", data.access_token);
        this.router.push('/')

      } catch (error) {
        this.handleError(error);

      }
    },
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

    async fetchMangaList() {
      try {
        const {data} = await axios({
          method: 'get',
          url: this.baseUrl + '/mangas'
        })
        this.dataManga = data.data
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMangaDetail(id) {
      try {
        const {data} = await axios({
          method: 'get',
          url: this.baseUrl + `/mangas/${id}`
        })
        this.mangaDetail = data
        console.log(this.mangaDetail);
      } catch (error) {
        console.log(error);
      }
    },
    logOut() {
      localStorage.clear()

      this.router.push('/login')
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
