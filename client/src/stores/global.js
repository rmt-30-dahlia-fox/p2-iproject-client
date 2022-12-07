import { defineStore } from "pinia";
import axios from "axios"
import Swal from 'sweetalert2'

export const globalStore = defineStore('global', {
    state: () => ({
        baseUrl: "http://localhost:3000",
        isRegistered: false,
        isLogin: false,
        greetTheName: '',
        username: '',
        email: '',
        password: '',
        players: {},
        currentPage: 1,
        playerPosition: '',
    }),

    actions: {
        async register(){
            try {
                const {data} = await axios({
                    method: "POST",
                    url: this.baseUrl + "/register",
                    data: {
                        username: this.username,
                        email: this.email,
                        password: this.password
                    }
                })
                this.username = ''
                this.email = ''
                this.password = ''
                this.isRegistered = true
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.email} has been registered`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                //   console.log(data, '<<<from store user');
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data,
                    // footer: '<a href="">Why do I have this issue?</a>'
                });
            }
        },

        async login(){
            try {
                const {data} = await axios({
                    method: "POST",
                    url: this.baseUrl + "/login",
                    data: {
                        email: this.email,
                        password: this.password
                    }
                })
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("name", data.name)
                this.greetTheName = data.name
                this.isLogin = true
                this.email = ''
                this.password = ''
                // console.log(data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Welcome ${data.name}`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data,
                    // footer: '<a href="">Why do I have this issue?</a>'
                });
            }
        },

        async logout(){
            await Swal.fire({
            title: "Are you sure?",
            text: "You will logout from this site",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, quit!",
            }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                this.isLogin = false
            }
            });
        },

        async fetchPlayer(){
            try {
                let path = `/players/?page=${this.currentPage}`
                if(this.playerPosition){
                    path = path + `&position=${this.playerPosition}`
                }
                const { data } = await axios({
                    method: "GET",
                    url: this.baseUrl + path,
                    headers: {access_token: localStorage.access_token}
                })
                this.players = data
                // console.log(this.players);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data,
                    // footer: '<a href="">Why do I have this issue?</a>'
                });
            }
        },

        async addMyPlayer(playerId){
            try {
                const { data } = await axios({
                    method: "POST",
                    url: this.baseUrl + "/myplayers/" + playerId,
                    headers: { access_token: localStorage.access_token },
                    data: { 
                        playerId
                     },
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Player has been successfully contracted`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data,
                    // footer: '<a href="">Why do I have this issue?</a>'
                });
            }
        },
    }
})