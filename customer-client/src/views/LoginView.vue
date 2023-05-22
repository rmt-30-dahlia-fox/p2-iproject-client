<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCustomerStore } from '../stores/customer';

export default {
  computed: {
    ...mapWritableState(useCustomerStore, ['loginForm'])
  },
  methods: {
    ...mapActions(useCustomerStore, ['login'])
  }
}
</script>
<template>
  <div class="hero">
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
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>