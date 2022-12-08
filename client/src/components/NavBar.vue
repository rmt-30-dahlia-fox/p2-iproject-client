<script>
import { mapState, mapWritableState } from 'pinia'
import { useGlobalStore } from '../stores/global'
export default{
  computed: {
    ...mapState(useGlobalStore, ['isLoggedIn']),
    ...mapWritableState(useGlobalStore, ['isSidebarOpen'])
  }
}
</script>

<template>
  <section style="box-shadow: 0 14px 25px 0 #000000;" id="navbar"
    class="sticky top-0 bg-black z-50 bg-opacity-90 h-16">
    <header aria-label="Site Header">
      <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a class="block" href="/">
          <span class="sr-only">Home</span>
          <img src="./icons/logo.png" alt="CarStore-Logo" class="w-20 object-fit">
          <p class="text-center font-bold text-white">CarStore</p>
        </a>

        <div class="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link to="/" class="text-sm transition hover:font-bold text-white" href="/">
                  Products
                </router-link>
              </li>

              <li>
                <router-link to="/location" class="text-sm transition hover:font-bold text-white" href="/">
                  Location
                </router-link>
              </li>

              <li>
                <router-link to="/contact" class="text-sm transition hover:font-bold text-white" href="/">
                  Contact Us
                </router-link>
              </li>

              <li>
                <router-link to="/about" class="text-sm transition hover:font-bold text-white" href="/">
                  About
                </router-link>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <router-link to="/login" v-if="!isLoggedIn" class="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                href="/">
                Login
              </router-link>

              <router-link to="/register" v-if="!isLoggedIn" class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:font-extrabold sm:block"
                href="/">
                Register
              </router-link>

              <a v-if="isLoggedIn" @click.prevent="(isSidebarOpen = true)" to="/profile" class="my-auto border border-white rounded-full">
                <img style="margin: 3px;" class="cursor-pointer h-9 m-1 bg-white rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Profile-Picture">
              </a>

            </div>
          </div>
        </div>
      </div>
    </header>

  </section>
</template>