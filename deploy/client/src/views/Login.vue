<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';

export default {
    computed: {
        ...mapWritableState(globalStore, ['email', 'password', 'isLogin'])
    },

    methods: {
        ...mapActions(globalStore, ['login', 'googleSignIn']),

        async subLogin(){
            await this.login()

            if(this.isLogin){
                this.$router.push('/')
            }
        },

        async signinGoogle(response){
          await this.googleSignIn(response)

          if(this.isLogin){
            this.$router.push('/')
          }
        }
    }
}
</script>

<template>
    <div class="container" id="login-gate-section">
      <div class="d-flex justify-content-center">
        <div class="col-5 p-5">
          <form @submit.prevent="subLogin" id="login-form">
            <div>
              <h2>Log In</h2>
            </div>
            <div class="mb-3">
              <label for="login-email" class="form-label">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="login-email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="login-password" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="login-password"
                required
              />
            </div>
            <button class="w-100 btn btn-lg btn-primary">Log in</button>
            <div class="text-center">
              <div class="my-5">
                <label for="login-google">or Sign in with</label>
              </div>
              <GoogleLogin :callback="signinGoogle"/>
            </div>
            <div class="my-3">
            <label>
              Don't have account yet? 
              <router-link to="/register" class="fw-bold" style="text-decoration: none;">Sign up for free</router-link>
            </label>
          </div>
          </form>
        </div>
      </div>
    </div>
</template>