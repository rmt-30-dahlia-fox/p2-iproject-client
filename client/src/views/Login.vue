<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  data(){
    return {
        
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['handleLogin']),
  },
  computed:{
    ...mapWritableState(useCounterStore, ['login'])
  }
}
</script>

<template>
    <div id="auth">
        <div class="row h-100">
            <div class="col-lg-5 col-12">
                <div id="auth-left">
                    <div class="d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/woman-buying-clothes-fashion-store-consulting-cashier-counter_74855-11199.jpg?w=996&t=st=1670408710~exp=1670409310~hmac=af4d59a970d559dab76f8d9101a2b2807504262aa59e5a54b066b7056454acc8" height="200px" alt="Logo" />
                    </div>
                    <div class="d-flex justify-content-center">
                        <h3 class="auth-title text-align-center">Admin/Staff</h3>
                    </div>
                    <div class="d-flex justify-content-center">
                        <h3 class="auth-title">Login</h3>
                    </div>
                    <p class="auth-subtitle mb-5">
                        Log in with username or email and password that is given to you.
                    </p>

                    <form @submit.prevent="handleLogin">
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input v-model="login.input" type="text" class="form-control form-control-xl" placeholder="Username/Email" />
                            <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div>
                        </div>
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input v-model="login.password" type="password" class="form-control form-control-xl" placeholder="Password" />
                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                        </div>
                        <!-- <div class="form-check form-check-lg d-flex align-items-end">
                            <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label text-gray-600" for="flexCheckDefault">
                                Keep me logged in
                            </label>
                        </div> -->
                        <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                            Log in
                        </button>
                    </form>
                </div>
            </div>
            <div class="col-lg-7 d-none d-lg-block">
                <div id="auth-right"></div>
            </div>
        </div>
    </div>
</template>
