<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAdminStore } from '../stores/admin'
export default {
  computed: {
    ...mapWritableState(useAdminStore, ['registerForm'])
  },
  methods: {
    ...mapActions(useAdminStore, ['register']),
  }
}
</script>

<template>
  <div class="hero h-screen">
    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <div class="card-body">
        <h1 class="text-center font-bold text-3xl">Register</h1>
        <form action="" @submit.prevent="register">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" v-model="registerForm.email" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered"
              v-model="registerForm.password" />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-info mb-4" type="submit">Register</button>
            <p class="text-center">Already have account? <span class="link link-primary">
              <RouterLink to="/login">Login here</RouterLink>
            </span></p>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>