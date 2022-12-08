<script></script>

<template>
  <!-- Landing Page -->
  <section class="bg-landing bg-no-repeat bg-cover bg-center bg-fixed">
    <div class="backdrop-brightness-75">
      <div
        class="mx-auto container max-w-screen-xl px-4 py-32 lg:flex lg:h-screen 2xl:h-fit lg:items-center"
      >
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Get Fit.
            <strong class="font-extrabold text-teal-700 sm:block">
              Stay Social.
            </strong>
          </h1>

          <p class="mt-4 sm:text-xl sm:leading-relaxed">
            Start your fitness daily with us and share it to your friends!
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <router-link
              class="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              to="/login"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
