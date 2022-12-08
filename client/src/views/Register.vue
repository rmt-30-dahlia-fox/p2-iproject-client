<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  data(){
    return {
        
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['handleMember']),
  },
  computed: {
    ...mapWritableState(useCounterStore, ['register']),
    ...mapState(useCounterStore, ['loggedUser'])
  }, 

  mounted(){
  }
}
</script>

<template>
<div id="auth">
    <div class="row h-100">
        <div class="col-lg-5 col-12">
            <div id="auth-left">
                <div class="d-flex justify-content-center">
                    <img src="https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information_335657-145.jpg?w=826&t=st=1670454677~exp=1670455277~hmac=6cf89f8993df1a36e9ef0731d5214b095b2756691a635fb0d221a4fc9033a577"
                        height="200px" alt="Logo" />
                </div>
                <div class="d-flex justify-content-center">
                    <h3 class="auth-title text-align-center">Admin/Staff</h3>
                </div>
                <div class="d-flex justify-content-center">
                    <h3 class="auth-title">Register</h3>
                </div>
               

                <form @submit.prevent="handleMember">
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="register.userName" type="text" class="form-control form-control-xl" placeholder="Username">
                        <div class="form-control-icon">
                            <i class="bi bi-pencil-square"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="register.fullName" type="text" class="form-control form-control-xl" placeholder="Full Name">
                        <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="register.role" type="text" class="form-control form-control-xl" placeholder="Role">
                        <div class="form-control-icon">
                            <i class="bi bi-briefcase"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="register.photo" type="text" class="form-control form-control-xl" placeholder="Photo Url">
                        <div class="form-control-icon">
                            <i class="bi bi-file-image"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="register.email" type="text" class="form-control form-control-xl" placeholder="Email">
                        <div class="form-control-icon">
                            <i class="bi bi-envelope"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-4">
                            <input v-model="register.password" type="password" class="form-control form-control-xl" placeholder="Password" />
                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                        </div>
                    <button class="btn btn-primary btn-block btn-lg shadow-lg mt-3">Submit</button>
                </form>
                <div class="d-flex justify-content-center">
                    <RouterLink to="/" class="btn btn-primary btn-block btn-lg bg-secondary mt-3">Return</RouterLink>
                </div>
            </div>
        </div>
        <div class="col-lg-7 d-none d-lg-block">
            <div id="auth-right">

            </div>
        </div>
    </div>

</div>
</template>

<style scoped>
@import '../assets/css/pages/auth.css';
</style>