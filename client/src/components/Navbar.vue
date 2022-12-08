<script>
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'

export default {
    data() {
        return {

        }
    },
    created() {

    },
    computed: {
        ...mapStores(useMainStore),
        ...mapState(useMainStore, ['loginStatus']),
    },
    methods: {

    },
    mounted() {

    },
    unmounted() {
        document.body.classList.remove('bg-dashb')
    }
}

</script>

<template>


        <nav class="navbar navbar-expand align-items-start text-white">
            <div class="container align-items-center" id="navbar-div">
               
                <div class="d-flex">
                    <a class="navbar-brand" href="#" v-if="this.$route.path == '/'">
                        <img src="../assets/travel-alliance-logo-final.png" alt="company-logo">
                    </a>
                    <a class="navbar-brand" href="#" v-if="this.$route.path !== '/'">
                        <img src="../assets/travel-alliance-low-resolution-logo-color-on-transparent-background.png" alt="company-logo">
                    </a>
                                
                    <router-link to="/"  v-if="(this.$route.path == '/' || this.$route.path == '/login')" class="nav-link text-white" aria-current="page" href="#" style="margin-top:16px">Home</router-link>
                    <router-link to="/"  v-else="this.$route.path == '/'" class="nav-link text-primary" aria-current="page" href="#" style="margin-top:16px">Home</router-link>
                </div>
                <ul class="navbar-nav">
                    
                    <li class="nav-item mt-2 d-flex align-items-center text-white">
                        <i v-if="this.$route.path == '/'" class="fa-solid fa-gift"></i>
                        <i v-if="this.$route.path !== '/'" class="fa-solid fa-gif text-primary"></i>
                        <a v-if="this.$route.path == '/'" class="nav-link text-white" aria-current="page" href="#">Rewards</a>
                        <a v-if="this.$route.path !== '/'" class="nav-link text-primary" aria-current="page" href="#">Rewards</a>
                    </li>
                    <li class="nav-item mt-3">
                        <router-link to="/transaction" v-if="this.$route.path == '/'" class="nav-link text-white" href="#">Your Order</router-link>
                        <router-link to="/transaction" v-if="this.$route.path !== '/'" class="nav-link text-primary" href="#">Your Order</router-link>
                    </li>
                    <li class="nav-item" style="margin-top: 10px" v-if="!this.loginStatus">
                        <a class="nav-link" href="#">
                            <router-link to="/login" class="btn btn-primary align-items-center">Sign In</router-link>
                        </a>
                    </li>
                    <li class="nav-item" style="margin-top: 10px" v-if="!this.loginStatus">
                        <a class="nav-link ">
                            <router-link to="/login" class="btn btn-primary align-items-center">Register</router-link>
                        </a>
                    </li>
                    <li class="nav-item" style="margin-top: 10px" v-if="this.loginStatus">
                        <a class="nav-link ">
                            <button @click.prevent="this.mainStore.logout" class="btn btn-primary align-items-center">Log Out</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>


</template>