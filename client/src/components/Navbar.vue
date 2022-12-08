<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  data(){
    return {
        login: {
            email: '',
            password: ''
        }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['handleAuthentication', 'handleLogout']),
  },
  computed: {
    ...mapWritableState(useCounterStore, ['loginState']),
    ...mapState(useCounterStore, ['loggedUser'])
  }, 

  mounted(){
    this.handleAuthentication()
  }
}
</script>

<template>
    <div id="sidebar" class="active">
        <div class="sidebar-wrapper">
            <div class="sidebar-header bg-danger position-relative">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="logo d-flex justify-content-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/1170/1170258.png?w=826&t=st=1670413487~exp=1670414087~hmac=040acd96d900dd82f1ec8f443040fa7dddce653381be25172e2dc87aa61ef860" style="height: 70px;" alt="Logo" srcset="">
                        <h3 class="text-light">marQofy cashier</h3>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul v-if="loginState" class="menu">
                    <li class="sidebar-title">Menu</li>

                    <li class="sidebar-item">
                        <RouterLink to="/dashboard" href="" class='sidebar-link'>
                            <i class="bi bi-grid-fill"></i>
                            <span>Dashboard</span>
                        </RouterLink>
                    </li>

                    <li class="sidebar-item">
                        <RouterLink to="/" href="" class='sidebar-link'>
                            <i class="bi bi-list-columns-reverse"></i>
                            <span>Report</span>
                        </RouterLink>
                    </li>

                    <li class="sidebar-item  ">
                        <RouterLink to="/favorites" href="" class='sidebar-link'>
                            <i class="bi bi-box-seam-fill"></i>
                            <span>Order</span>
                        </RouterLink>
                    </li>

                </ul>
                
                <ul class="menu">
                    <li class="sidebar-title">Account</li>

                    <li v-if="!loginState" @click.prevent="changePage('Login')" class="sidebar-item  ">
                        <RouterLink to="/login" href="" class='sidebar-link'>
                            <i class="bi bi-door-open"></i>
                            <span>Login</span>
                        </RouterLink>
                    </li>

                    <li v-if="loggedUser.role == 'Admin'" @click.prevent="changePage('Register')" class="sidebar-item  ">
                        <RouterLink to="/register" href="" class='sidebar-link'>
                            <i class="bi bi-card-checklist"></i>
                            <span>Register</span>
                        </RouterLink>
                    </li>

                    <li v-if="loginState" @click.prevent="changePage('Register')" class="sidebar-item  ">
                        <RouterLink to="/members" href="" class='sidebar-link'>
                            <i class="bi bi-person-rolodex"></i>
                            <span>Member</span>
                        </RouterLink>
                    </li>

                    <li v-if="loginState" class="sidebar-item">
                        <a @click.prevent="handleLogout" href="" class='sidebar-link'>
                            <i class="bi bi-door-open-fill"></i>
                            <span>Logout</span>
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/css/pages/auth.css'
</style>