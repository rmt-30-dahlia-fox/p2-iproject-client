<script>
import { mapActions } from 'pinia';
import { useAdminStore } from '../stores/admin';

export default {
  methods: {
    ...mapActions(useAdminStore, ['logout'])
  }
}
</script>
<template>
  <div class="navbar bg-base-100 mt-4 mb-6">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <i class="fa-solid fa-bars text-xl"></i>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><RouterLink to="/">Dashboard</RouterLink></li>
          <li><RouterLink to="/units">Units</RouterLink></li>
          <li><RouterLink to="/orders">Orders</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-2xl">GASLAH</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <RouterLink to="/units/add">
          <i class="fa-solid fa-plus text-xl"></i>
        </RouterLink>
      </button>
      <button class="btn btn-ghost btn-circle" @click.prevent="logout">
        <i class="fa-solid fa-right-from-bracket text-xl"></i>
      </button>
    </div>
  </div>
</template>