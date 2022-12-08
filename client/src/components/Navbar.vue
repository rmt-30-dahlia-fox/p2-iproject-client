<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';



export default {
    computed: {
        ...mapWritableState(useCounterStore, ['search', 'loggedIn'])
    },
    methods: {
        logOut() {
            localStorage.clear()
            this.loggedIn = false
            this.$router.push('/login')
        },
        ...mapActions(useCounterStore, ['findManga'])
    },
    created() {
        if (localStorage.access_token) {
            this.loggedIn = true
        }
    }

}

</script>

<template>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light p-2 bg-opacity-10" style="background-color:gold ;">
        <!-- Container wrapper -->
        <div class="container ">
            <!-- Navbar brand -->
            <a class="navbar-brand me-2">
                <img src="../assets/manga.gif" style="border-radius: 100px;" height="26"
                    alt="Gonna Read 'Em All Logo" />

            </a>



            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarButtonsExample">
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link style="text-decoration: none;color:darkslateblue" to="/"> Let's Read 'Em
                            All</router-link>
                    </li>
                </ul>
                <!-- Left links -->

                <div class=" align-items-center d-flex justify-content-between">
                    <div>
                        <form @submit.prevent="findManga(search)" class="d-flex" role="search">
                            <input v-model="search" class="form-control me-2" type="search" placeholder="Search"
                                aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <router-link v-if="!loggedIn" to="/login">
                        <button type="button" class="btn btn-link px-3 me-2">
                            Login
                        </button> </router-link>
                    <RouterLink to="/register">
                        <button v-if="!loggedIn" type="button" class="btn btn-primary me-3"
                            style="border-radius: 10px;">
                            Sign up
                        </button>
                    </RouterLink>
                    <router-link v-if="loggedIn" style="margin-right: 10px;margin-left: 10px;text-decoration: none;color:darkslateblue" to="/wantToRead">
                        Want To Read
                    </router-link>


                    <div v-if="loggedIn" class="mx-1">
                        <a @click.prevent="logOut" class="btn btn-danger px-3" role="button"
                            style="border-radius: 10px;"><i class="fab fa-github">Logout</i></a>
                    </div>
                </div>
            </div>
            <!-- Collapsible wrapper -->
        </div>
        <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>