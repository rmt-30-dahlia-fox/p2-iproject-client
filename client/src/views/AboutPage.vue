<script></script>

<template>
  <section id="about-section" class="mt-6">
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <img src="https://cdn-icons-png.flaticon.com/512/1553/1553980.png" alt="CarStore-Logo" class="w-20">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            CarStore
          </h2>
        </div>
      </div>

      <img alt="Code"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]" />
    </section>

    <p class="text-4xl font-extrabold leading-relaxed mt-8 px-8">About this project.</p>
    <p class="text-lg leading-relaxed px-8">Made by Joshua Natanael</p>
    <p class="text-lg leading-relaxed mt-8 px-8">This project was made during bootcamp program at Hacktiv8 fullstack javascript program.</p>
    <p class="text-lg leading-relaxed mt-8 px-8">Highlighted project features:</p>
    <ul id="list-feature" class="px-12">
      <li>Register function</li>
      <li>Login function</li>
      <li>Login using Google OAuth</li>
      <li>Product list to show all available products</li>
      <li>Product detail page (show reviews, youtube videos for this product (youtube API), and product detail)</li>
      <li>Booking product 5% from product price (payment using midtrans)</li>
      <li>Send email after customer pay booking fee (nodemailer)</li>
      <li>Show selected dealers location</li>
      <li>Show dealers phone number</li>
      <li>Show all my cars (cars that already booked and paid)</li>
      <li>Edit profile (first name, last name, email, phone number, and password)</li>
      <li>Show all transactions done by user (status: canceled, pending, paid)</li>
    </ul>
    <h2 class="text-4xl my-5 font-extrabold text-center mt-40">API, Package & Framework</h2>
    <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 mx-8">
      <a class="block rounded-lg mx-auto">
        <img alt="Vue-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          class=" h-24 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Vue.js
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Sequelize-logo"
          src="https://google.github.io/sqlcommenter/images/sequelize-logo.png"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Sequelize.js
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Postgresql-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Postgresql
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Express-logo"
          src="https://caraguna.com/wp-content/uploads/2022/02/expressjs.png"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Express JS
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Tailwind-logo"
          src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Tailwind
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="JWT-logo"
          src="https://thekenyandev.com/static/ba180df420dbaffd7405a0f65764feab/cover.png"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          JWT
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Bcryptjs-logo"
          src="https://1.bp.blogspot.com/-QuPVDnpNUo0/XQ8En-wdlrI/AAAAAAAAJPc/BIOm6dWh50Y3gL2cETWgt4AK77BVlcI7gCLcBGAs/s1600/bcrypt-logo.jpg"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Bcryptjs
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Leaflet-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1200px-Leaflet_logo.svg.png"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Leaflet
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="midtrans-logo"
          src="https://midtrans.com/assets/img/midtrans-logoo.jpg?v=1658721877"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          midtrans
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="youtube-logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Youtube API
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          Google Oauth
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="nodemailer-logo"
          src="https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1"
          class=" h-28 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center pb-8 ">
          nodemailer
        </h3>
      </a>
    </div>
    <h2 class="text-4xl my-5 font-extrabold text-center mt-40">Credits</h2>
    <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 mx-8">
      <a class="block rounded-lg mx-auto">
        <img alt="Flaticon-logo"
          src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e7b8a53bf9ee1f0023a60ce6644dd5f8/flaticon.jpg"
          class=" h-24 object-contain mt-10" />

        <h3 class="text-xl text-black/90 text-center">
          Flaticon
        </h3>
        <h3 class="text-xl text-black/90 text-center pb-8">
          (all logo)
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Unsplash-logo"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968763.png"
          class=" h-24 object-contain mt-10 mx-auto" />

        <h3 class="text-xl text-black/90 text-center">
          Unsplash
        </h3>
        <h3 class="text-xl text-black/90 text-center pb-8">
          (picture assets)
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="Pixabay-logo"
          src="https://cdn.freebiesupply.com/logos/large/2x/pixabay-logo-png-transparent.png"
          class=" h-24 object-contain mt-10 mx-auto" />

        <h3 class="text-xl text-black/90 text-center">
          Pixabay
        </h3>
        <h3 class="text-xl text-black/90 text-center pb-8">
          (picture assets)
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <img alt="LottieFiles-logo"
          src="https://avatars.githubusercontent.com/u/30947444?v=4"
          class=" h-24 object-contain mt-10 mx-auto" />

        <h3 class="text-xl text-black/90 text-center">
          LottieFiles
        </h3>
        <h3 class="text-xl text-black/90 text-center pb-8">
          (loader)
        </h3>
      </a>
      <a class="block rounded-lg mx-auto">
        <p class="h-24 w-24 mt-10 text-white font-extrabold text-8xl bg-black">UI</p>

        <h3 class="text-xl text-black/90 text-center">
          HyperUI
        </h3>
      </a>
    </div>
  </section>
</template>