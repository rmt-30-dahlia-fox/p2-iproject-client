<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';



export default{
    data(){
        return{
            dataRegister: {
                email : "",
                password : ""
            }
        }
    },
    methods :{
        ...mapActions(useCounterStore, ['registerHandler'])
    }
}
</script>

<template>

    <div class="d-flex justify-content-center">
        <div class="container text-c" style="width: 25rem;">
            <h2 class="text-center">Register</h2>
            <form @submit.prevent="registerHandler(dataRegister)">      

                <!-- Text input -->
                <div class="form-outline mb-4">
                    <input v-model="dataRegister.email" type="email" id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">Email Address</label>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input v-model="dataRegister.password" type="password" id="form6Example5" class="form-control" />
                    <label class="form-label" for="form6Example5">Password</label>
                </div>      


                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
            </form>
        </div>
    </div>
</template>