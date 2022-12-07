<script>

export default {
    created() {
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
                    <a class="navbar-brand" href="#" v-if="this.$route.path !== '/hotels'">
                        <img src="../assets/travel-alliance-logo-final.png" alt="company-logo">
                    </a>
                    <a class="navbar-brand" href="#" v-if="this.$route.path === '/hotels'">
                        <img src="../assets/travel-alliance-low-resolution-logo-color-on-transparent-background.png" alt="company-logo">
                    </a>
                                
                    <a class="nav-link text-white" aria-current="page" href="#" style="margin-top:16px">Home</a>
                </div>
                <ul class="navbar-nav">
                    
                    <li class="nav-item mt-2 d-flex align-items-center text-white">
                        <i class="fa-solid fa-gift"></i>
                        <a class="nav-link text-white" aria-current="page" href="#">Rewards</a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link text-white" href="#">Your Order</a>
                    </li>
                    <li class="nav-item" style="margin-top: 10px">
                        <a class="nav-link" href="#">
                            <button class="btn btn-primary align-items-center">Sign In</button>
                        </a>
                    </li>
                    <li class="nav-item" style="margin-top: 10px">
                        <a class="nav-link ">
                            <button class="btn btn-primary align-items-center">Register</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>


</template>