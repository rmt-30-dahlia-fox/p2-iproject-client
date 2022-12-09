<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAdminStore } from '../stores/admin'

export default {
  computed: {
    ...mapWritableState(useAdminStore, ['loginForm'])
  },
  methods: {
    ...mapActions(useAdminStore, ['login'])
  }
}
</script>
<template>
  <div class="hero h-screen">
      <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="text-center font-bold text-3xl">Login</h1>
          <form action="" @submit.prevent="login">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" v-model="loginForm.email" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" class="input input-bordered" v-model="loginForm.password" />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary mb-4">Login</button>
              <p class="text-center">Or <span class="link link-primary">
                <RouterLink to="/register">register</RouterLink>
              </span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>