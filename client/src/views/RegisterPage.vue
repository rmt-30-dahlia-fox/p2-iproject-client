<script>
import { mapActions } from 'pinia'
import { useGlobalStore } from '../stores/global'
export default{
  data(){
    return{
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: ""
      }
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['registerHandler'])
  }
}
</script>

<template>
  <section id="register-section">
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img alt="Night" src="https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_1280.jpg"
            class="absolute inset-0 h-full w-full object-cover opacity-80" />

          <div class="hidden lg:relative lg:block lg:p-12">
            <a class="block text-white" href="/">
              <span class="sr-only">Home</span>
              <img viewBox="0 0 28 24" fill="none" class="h-8 sm:h-10" src="../components/icons/logo.png" alt="CarStore-Logo">
            </a>

            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to CarStore
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
              Join CarStore family!
            </p>
          </div>
        </section>

        <main aria-label="Main"
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div class="max-w-xl lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
              <a class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/">
                <span class="sr-only">Home</span>
                <img viewBox="0 0 28 24" fill="none" class="h-8 sm:h-10"
                  src="https://cdn-icons-png.flaticon.com/512/1553/1553980.png" alt="CarStore-Logo">
              </a>

              <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to CarStore
              </h1>

              <p class="mt-4 leading-relaxed text-gray-500">
                Join CarStore family!
              </p>
            </div>
            <h1 class="text-4xl font-extrabold mb-10">Sign Up</h1>
            <form @submit.prevent="registerHandler(register)" class="grid grid-cols-6 gap-3">
              <div class="col-span-6 sm:col-span-3">
                <label for="FirstName" class="block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input v-model="register.firstName" type="text" id="FirstName" name="first_name"
                  class="h-10 px-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="LastName" class="block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input v-model="register.lastName" type="text" id="LastName" name="last_name"
                  class="h-10 px-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div class="col-span-6">
                <label for="Email" class="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input v-model="register.email" type="email" id="Email" name="email"
                  class="h-10 px-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div class="col-span-6">
                <label for="phoneNumber" class="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input v-model="register.phoneNumber" type="text" id="phoneNumber" name="Phone Number"
                  class="h-10 px-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="Password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input v-model="register.password" type="password" id="Password" name="password"
                  class="h-10 px-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input v-model="register.confirmPassword" type="password" id="PasswordConfirmation" name="password_confirmation"
                  class="h-10 px-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div class="col-span-6">
                <p class="text-sm text-gray-500">
                  By creating an account, you agree to our terms and conditions privacy policy
                </p>
              </div>

              <div class="col-span-6 sm:items-center sm:gap-4 text-center">
                <button
                  class="inline-block shrink-0 border border-black rounded-md bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black">
                  Create an account
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-10">
                  Already have an account?
                  <router-link to="/login" class="text-gray-700 underline">Log in</router-link>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>

  </section>
</template>