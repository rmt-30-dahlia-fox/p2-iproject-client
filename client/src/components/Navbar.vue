<script>
import { mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/global";

export default {
  computed: {
    ...mapWritableState(useGlobalStore, ["isLogin", "goToProfile"]),
  },
  methods: {
    goToHome() {
      if (this.isLogin) {
        this.$router.push("/home");
      } else {
        this.$router.push("/");
      }
    },
    handleLogout() {
      this.isLogin = false;
      localStorage.clear();

      this.$router.replace("/login");
    },
  },
};
</script>

<template>
  <!-- Navbar -->
  <div class="sticky top-0 bg-white z-20">
    <header aria-label="Site Header" class="container mx-auto">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a @click.prevent="goToHome" class="block text-teal-600" href="/">
              <span class="sr-only">Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="logo-15"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                  class="ccustom"
                  fill="#17CF97"
                />
                <path
                  d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                  class="ccustom"
                  fill="#17CF97"
                />
                <path
                  d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                  class="ccustom"
                  fill="#17CF97"
                />
                <path
                  d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                  class="ccustom"
                  fill="#17CF97"
                />
              </svg>
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    @click.prevent="goToHome"
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li v-if="isLogin">
                  <a
                    @click.prevent="goToProfile"
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <!-- <div class="hidden sm:flex">
                  <a
                    class="rounded-md flex border-2 border-[#3b5998] bg-[#3b5998] px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                      />
                    </svg>
                    Sign in with Facebook
                  </a>
                </div> -->

                <!-- <div class="hidden sm:flex">
                  <a
                    class="rounded-md flex bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="mr-2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"
                      ></path>
                    </svg>
                    Sign in with Google
                  </a>
                </div> -->

                <div v-if="!isLogin" class="hidden sm:flex">
                  <router-link
                    class="rounded-md flex bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to="/login"
                  >
                    Sign in
                  </router-link>
                </div>

                <div v-if="isLogin" class="hidden sm:flex">
                  <a
                    @click.prevent="handleLogout"
                    class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/"
                  >
                    Logout
                  </a>
                </div>
              </div>

              <div class="block md:hidden">
                <button
                  class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
