<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';

export default{
    computed: {
        ...mapWritableState(globalStore, ['username', 'email', 'password', 'isRegistered'])
    },

    methods: {
        ...mapActions(globalStore, ['register']),

        async subReg(){
          await this.register()
          if(this.isRegistered){
            this.$router.push('/login')
          }
        }
    },

    
}
</script>

<template>
  <div class="container" id="login-gate-section">
    <div class="d-flex justify-content-center">
      <div class="col-5 p-5">
        <form @submit.prevent="subReg" id="register-form">
          <div>
            <h2>Sign Up</h2>
          </div>
          <div class="mb-3">
            <label for="reg-username" class="form-label">Username</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="reg-username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="reg-email" class="form-label">Email address</label>
            <input 
              v-model="email"
              type="email" 
              class="form-control" 
              id="reg-email" 
              required 
            />
          </div>
          <div class="mb-3">
            <label for="reg-password" class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="reg-password"
              required
            />
          </div>
          <button class="w-100 btn btn-lg btn-primary">Sign Up</button>

          <div class="my-3">
            <label>
              Already have an account? 
              <router-link to="/login" class="fw-bold" style="text-decoration: none;">Log in</router-link>
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
