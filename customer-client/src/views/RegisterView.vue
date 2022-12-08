<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCustomerStore } from '../stores/customer';
export default {
  computed: {
    ...mapWritableState(useCustomerStore, ['registerForm'])
  },
  methods: {
    ...mapActions(useCustomerStore, ['register']),
  }
}
</script>

<template>
  <div class="hero">
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
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="John Doe" class="input input-bordered" v-model="registerForm.name" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input type="text" placeholder="+12345" class="input input-bordered" v-model="registerForm.phoneNumber" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Identity Type</span>
            </label>
            <select class="select select-bordered w-full active" v-model="registerForm.identityType">
              <option disabled selected value="">Identity Type</option>
              <option value="Visa">Visa</option>
              <option value="ID">ID</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Identity Number</span>
            </label>
            <input type="text" placeholder="+12345" class="input input-bordered"
              v-model="registerForm.identityNumber" />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-info" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>