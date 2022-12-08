import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: "http://localhost:3000",
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
    }

  }),
  actions: {
    async mailWantToRead(){
      try {
        const {data} = await axios({
          method : "get",
          url : this.baseUrl + `/mailWantToRead`,
          headers :{
            access_token : localStorage.access_token
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'mailed',
          text: `${data.message}`
        })
      } catch (error) {
        this.handleError(error)
        console.log(error);
      }
    },
    async fetchQuote(){
      try {
        const {data} = await axios({
          method : 'get',
          url : "https://animechan.vercel.app/api/random"
        })
        console.log(data);
        this.quote = data
      } catch (error) {
        this.handleError(error)
        console.log(error);
      }
    },
    async deleteWantToRead(id){
      try {
        const {data} = await axios({
          method : "delete",
          url : this.baseUrl + `/wantToRead/${id}`,
          headers :{
            access_token : localStorage.access_token
          }
        })
        
        Swal.fire({
          icon: 'success',
          title: 'delete',
          text: `${data.message}`
        })
        this.fetchWantToRead()
      } catch (error) {
        this.handleError(error)
        console.log(error);
      }
    },   
    async patchStatusWantToRead(id,statusRead){
      try {
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
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'update',
          text: `${data.message}`
        })
        this.fetchWantToRead()


      } catch (error) {
        this.handleError(error)
        console.log(error);
      }
    },
    async fetchWantToRead(){
      try {
        const {data} = await axios({
          method : "get",
          url : this.baseUrl + "/wantToRead",
          headers :{
            access_token : localStorage.access_token
          }
        })
        console.log('>>',data);
        this.wantToRead = data



      } catch (error) {
        this.handleError(error)
        console.log(error);
      }
    },
    async addToWantToRead(){
      try {
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
        console.log(error);
      }
    },
    async findManga() {
      try {
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

        console.log(this.foundManga);
      } catch (error) {
        this.handleError(error)
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
        this.loggedIn = true

        this.router.push('/')

      } catch (error) {
        this.handleError(error);
        console.log(error);

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
        this.loggedIn = true

        this.router.push('/')

      } catch (error) {
        console.log(error);
        this.handleError(error)

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
        this.loggedIn = true
        this.router.push('/')

      } catch (error) {
        console.log(error);
        this.handleError(error)

      }
    },

    async fetchMangaList() {
      try {
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
        console.log(error);
      }
    },

    async fetchMangaDetail(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/mangas/${id}`
        })
        this.mangaDetail = data
        console.log(this.mangaDetail);
      } catch (error) {
        this.handleError(error)
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
