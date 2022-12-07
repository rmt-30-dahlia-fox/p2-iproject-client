<script>
import { mapActions, mapWritableState } from 'pinia'
import { globalStore } from '../stores/global'

export default{
    data(){
        return {
        filterPosition: ''
        }
    },

    computed: {
        ...mapWritableState(globalStore, ['isLogin', 'greetTheName', 'playerPosition', 'players'])
    },

    methods: {
        ...mapActions(globalStore, ['logout', 'fetchPlayer']),

        async handlerLogout(){
            await this.logout()
            
            if(!this.isLogin){
                this.$router.replace('/login')
            }
        },

        async searchClicked(){
            this.playerPosition = this.filterPosition
            await this.fetchPlayer()
            if(this.players.totalItems === 0){
                this.$router.push('/notfound')
            } else{
                this.currentPage = 1
                this.$router.push('/')
            }
        },
    }
}
</script>

<template>
<nav class="navbar navbar-expand-md navbar-light sticky-top bg-light border-bottom border-warning" aria-label="Fourth navbar example">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://cdn.pixabay.com/photo/2016/06/29/18/46/burger-1487481__480.png" alt="" height="50px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
        <form @submit.prevent="searchClicked" class="me-auto d-flex flex-row">
            <select v-model="filterPosition" class="form-select" name="position" id="">
                <option value="" selected>All</option>
                <option value="F" >Fronter</option>
                <option value="M" >Middle</option>
                <option value="D" >Defender</option>
                <option value="G" >Goal Keeper</option>
            </select>
            <button class="btn btn-warning border border-white text-secondary rounded ms-2" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div class="me-auto"></div>
        <ul class="navbar-nav mb-2 mb-md-0">
            <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">My Team</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hai, <span>{{ greetTheName }}</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
                <li class="nav-item">
                <a @click.prevent="handlerLogout" class="dropdown-item" href="#">
                    <i class="fa-solid fa-right-from-bracket"></i><i class="fa-solid fa-person-running"></i>  Logout
                </a>
                </li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
</nav>
</template>