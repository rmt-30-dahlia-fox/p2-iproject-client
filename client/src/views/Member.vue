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
    ...mapWritableState(useCounterStore, ['member']),
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
                    <img src="https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?w=826&t=st=1670430684~exp=1670431284~hmac=1742a8808a5bc832ecb83d5448306de5785fa150a335d336819955459a1928e6" height="300px" alt="Logo" />
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="auth-title">Add Member</h4>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="auth-subtitle mb-5">Input Member Information</p>
                </div>

                <form @submit.prevent="handleMember">
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="member.register.name" type="text" class="form-control form-control-xl" placeholder="Username">
                        <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="member.register.phone" type="text" class="form-control form-control-xl" placeholder="Phone Number">
                        <div class="form-control-icon">
                            <i class="bi bi-phone"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="member.register.email" type="text" class="form-control form-control-xl" placeholder="Email">
                        <div class="form-control-icon">
                            <i class="bi bi-envelope"></i>
                        </div>
                    </div>
                    <div class="form-group position-relative has-icon-left mb-3">
                        <input v-model="member.register.gender" type="text" class="form-control form-control-xl" placeholder="Gender">
                        <div class="form-control-icon">
                            <i class="bi bi-gender-ambiguous"></i>
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