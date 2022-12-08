<script>
import { mapState } from "pinia";
import { useCustomerStore } from '../stores/customer'

export default {
  computed: {
    ...mapState(useCustomerStore, ['isLogin'])
  }
}
</script>
<template>
  <div class="container mx-auto shadow-lg sticky top-0 z-50 bg-base-100 w-screen">
    <div class="navbar w-full">
      <div class="flex-1">
        <RouterLink to="/">
          <a class="btn btn-ghost normal-case text-xl">Gaslah</a>
        </RouterLink>
      </div>
      <div class="flex-none">
        <RouterLink to="/login" v-if="!isLogin">
          <button class="btn btn-square btn-ghost">
            <i class="fa-solid fa-right-to-bracket text-xl"></i>
          </button>
        </RouterLink>
        <RouterLink to="/register" v-if="!isLogin">
          <button class="btn btn-square btn-ghost">
            <i class="fa-solid fa-user-plus text-xl"></i>
          </button>
        </RouterLink>
        <RouterLink to="/order-form" v-if="isLogin">
          <button class="btn btn-square btn-ghost">
            <i class="fa-solid fa-plus text-xl"></i>
          </button>
        </RouterLink>
        <RouterLink to="">
          <button class="btn btn-square btn-ghost" v-if="isLogin">
            <i class="fa-solid fa-right-from-bracket text-xl"></i>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>