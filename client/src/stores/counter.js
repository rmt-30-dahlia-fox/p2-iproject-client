import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: "https://sipri-manga-production.up.railway.app",
    // baseUrl: "http://localhost:3000",
    dataManga: "",
    foundManga: "",
    mangaDetail: "",
    loggedIn: false,
    search: "",
    wantToRead : "",
    currentPage : 1,
    quote : {
      quote : "",
      character : ""
    },
    loading : false

  }),
  actions: {
    async mailWantToRead(){
      try {
        this.loading = true
        const {data} = await axios({
          method : "get",
          url : this.baseUrl + `/mailWantToRead`,
          headers :{
            access_token : localStorage.access_token
          }
        })
        this.loading = false

        Swal.fire({
          icon: 'success',
          title: 'mailed',
          text: `${data.message}`
        })
      } catch (error) {
        this.handleError(error)
        
      } finally{
        this.loading = false

      }
    },
    async fetchQuote(){
      try {
        const {data} = await axios({
          method : 'get',
          url : "https://animechan.vercel.app/api/random"
        })
        
        this.quote = data
      } catch (error) {
        this.handleError(error)
        
      }
    },
    async deleteWantToRead(id){
      try {
        this.loading = true

        const {data} = await axios({
          method : "delete",
          url : this.baseUrl + `/wantToRead/${id}`,
          headers :{
            access_token : localStorage.access_token
          }
        })
        this.loading = false
        
        Swal.fire({
          icon: 'success',
          title: 'delete',
          text: `${data.message}`
        })
        this.fetchWantToRead()
      } catch (error) {
        this.handleError(error)
        
      }
    },   
    async patchStatusWantToRead(id,statusRead){
      try {
        this.loading = true
        
        const {data} = await axios({
          method : "patch",
          url : this.baseUrl + `/wantToRead/${id}`,
          headers :{
            access_token : localStorage.access_token
          },
          data : {
            statusRead
          }
        })
        this.loading = false

        
        Swal.fire({
          icon: 'success',
          title: 'update',
          text: `${data.message}`
        })
        this.fetchWantToRead()


      } catch (error) {
        this.handleError(error)
        
      } finally{
        this.loading = false

      }
    },
    async fetchWantToRead(){
      try {
        this.loading = true

        const {data} = await axios({
          method : "get",
          url : this.baseUrl + "/wantToRead",
          headers :{
            access_token : localStorage.access_token
          }
        })
        
        this.wantToRead = data



      } catch (error) {
        this.handleError(error)
        
      } finally{
        this.loading = false

      }
    },
    async addToWantToRead(){
      try {
        this.loading = true

        await axios({
          method : "post",
          url : this.baseUrl + "/wantToRead",
          data :{
            MangaId : this.mangaDetail.id,
            mainPicture : this.mangaDetail.main_picture.large,
            title: this.mangaDetail.title
          },
          headers :{
            access_token : localStorage.access_token
          }
        })
        

        this.router.push('/wantToRead')
        

      } catch (error) {
        this.handleError(error)
        
      } finally{
        this.loading = false

      }
    },
    async findManga() {
      try {
        this.loading = true

        this.foundManga = ""

        if (this.search.length < 3 || !this.search) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Minimum 3 Character to search`
          })
          return this.router.push('/')
        }
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/findManga',
          data: {
            search: this.search
          }
        })
        this.foundManga = data.data
        this.router.push('/findManga')

        
      } catch (error) {
        this.handleError(error)
        
      } finally{
        this.loading = false

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
        this.loggedIn = true

        this.router.push('/')

      } catch (error) {
        this.handleError(error);
        

      }
    },
    async registerHandler(dataRegister) {
      try {
        this.loading = true

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
        this.loggedIn = true

        this.router.push('/')

      } catch (error) {
        
        this.handleError(error)

      } finally{
        this.loading = false

      }
    },
    async loginHandler(dataLogin) {
      try {
        this.loading = true

        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.router.push('/')

      } catch (error) {
        
        this.handleError(error)

      }finally{
        this.loading = false

      }
    },

    async fetchMangaList() {
      try {
        this.loading = true

        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/mangas',
          params: {
            page: this.currentPage
          }
        })
        this.dataManga = data.data
      } catch (error) {
        this.handleError(error)
        
      } finally{
        this.loading = false

      }
    },

    async fetchMangaDetail(id) {
      try {
        this.loading = true

        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/mangas/${id}`
        })
        this.mangaDetail = data
        
      } catch (error) {
        this.handleError(error)
        
      } finally{
        this.loading = false

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
