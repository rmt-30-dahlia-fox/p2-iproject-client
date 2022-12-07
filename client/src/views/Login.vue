<script>
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'

export default {
    data() {
        return {
            isLoginPage: true,
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
            address: ''
        }
    },
    computed: {
        ...mapStores(useMainStore),
    },
    mounted() {
        document.querySelector('.navbar').classList.add('bg-primary')
    }, 
    unmounted() {
        document.querySelector('.navbar').classList.remove('bg-primary')

    },
    methods: {
        changeToRegister() {
            this.isLoginPage = false
        },
        changeToLogin() {
            this.isLoginPage = true
        },
        handleRegister() {
            const obj = {
                username: this.username,
                email: this.email,
                password: this.password,
                phoneNumber: this.phoneNumber,
                address: this.address
            }
            this.mainStore.register(obj)
            this.username = '',
            this.email = ''
            this.password = ''
            this.phoneNumber = ''
            this.address = ''
        },
        handleLogin() {
            const obj = {
                email: this.email,
                password: this.password,
            }
            this.mainStore.login(obj)
            this.email = ''
            this.password = ''
        }
    }
}

</script>

<template>

<section class="vh-100 mt-4">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">
        <div class="d-flex justify-content-center align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5" style="height: 90vh">

            <form @submit.prevent="handleLogin" style="width: 23rem;" v-if="this.isLoginPage">

                <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

                <div class="form-outline mb-4">
                <input v-model="this.email" type="email" id="form2Example18" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example18">Email address</label>
                </div>

                <div class="form-outline mb-4">
                <input v-model="this.password" type="password" id="form2Example28" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example28">Password</label>
                </div>

                <div class="pt-1 mb-4">
                <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                </div>

                <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                <p>Don't have an account? <a @click.prevent="changeToRegister" href="#!" class="link-info">Register here</a></p>

            </form>


            <form @submit.prevent="handleRegister" style="width: 23rem;" v-if="!this.isLoginPage">

                <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Register</h3>

                <div class="form-outline mb-4">
                <input v-model="this.username" type="text" id="username" class="form-control form-control-lg" />
                <label class="form-label" for="username">Username</label>
                </div>

                <div class="form-outline mb-4">
                <input v-model="this.email" type="email" id="email" class="form-control form-control-lg" />
                <label class="form-label" for="email">Email address</label>
                </div>

                <div class="form-outline mb-4">
                <input v-model="this.password" type="password" id="password" class="form-control form-control-lg" />
                <label class="form-label" for="password">Password</label>
                </div>

                <div class="form-outline mb-4">
                <input v-model="this.phoneNumber" type="phoneNumber" id="phoneNumber" class="form-control form-control-lg" />
                <label class="form-label" for="phoneNumber">Phone Number</label>
                </div>

                <div class="form-outline mb-4">
                <input v-model="this.address" type="address" id="address" class="form-control form-control-lg" />
                <label class="form-label" for="address">Address</label>
                </div>

                <div class="pt-1 mb-4">
                <button class="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                </div>

                <p>Have an account? <a @click.prevent="changeToLogin" href="#!" class="link-info">Login here</a></p>

            </form>

        </div>

        

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="../assets/nature-1670417008629-1488.jpg"
          alt="Login image" id="login-img" class="w-100" style="object-fit: cover; object-position: left;">
      </div>
    </div>
  </div>
</section>

</template>