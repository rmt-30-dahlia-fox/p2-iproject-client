<script></script>

<template>
  <!-- My Profile Page -->
  <div class="container mx-auto">
    <nav
      class="flex max-w-fit mx-auto border-b border-gray-100 text-sm font-medium"
    >
      <a href="" class="-mb-px border-b border-current p-4 text-teal-500">
        My Activities
      </a>

      <a
        href=""
        class="-mb-px border-b border-transparent p-4 hover:text-teal-500"
      >
        My Profile
      </a>

      <a
        href=""
        class="-mb-px border-b border-transparent p-4 hover:text-teal-500"
      >
        Edit Profile
      </a>
    </nav>

    <!-- My Profile -->
    <div class="p-4 bg-gray-100 mt-2">
      <div class="mb-4 text-center opacity-90">
        <a href="#" class="relative block">
          <img
            alt="profil"
            src="./assets/profile-pic.webp"
            class="mx-auto object-cover rounded-full h-40 w-40"
          />
        </a>
      </div>
      <div class="text-center flex flex-col items-center">
        <p class="text-2xl text-black">Patrick Sebastien</p>
        <p class="text-xl font-bold text-teal-500">Premium</p>
        <div class="max-w-xs py-4 font-light text-black text-md">
          <p>Born at August 12th 2000</p>
          <p>Live in Bali</p>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center pt-4 mx-auto text-gray-500 border-t border-gray-400 w-44"
      >
        <span
          class="font-medium whitespace-nowrap rounded-full bg-teal-100 px-2.5 py-0.5 text-sm text-teal-500"
        >
          Badge
        </span>

        <div class="my-2">
          <h2 class="font-medium text-black">50 / 100 Stars</h2>
          <div class="mt-2 overflow-hidden rounded-full bg-gray-200">
            <div class="h-2 w-2/3 rounded-full bg-teal-500"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- My Activities -->
    <div
      class="flex flex-col gap-4 container max-w-xl my-4 mx-auto justify-center"
    >
      <article class="rounded-xl border-2 border-gray-100 bg-white">
        <div class="flex items-start p-6 justify-between">
          <a href="#" class="block shrink-0">
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              class="h-14 w-14 rounded-lg object-cover"
            />
          </a>

          <div class="ml-4 grow">
            <h3 class="font-medium sm:text-lg">
              <a href="#" class="hover:underline"> John Doe </a>
            </h3>

            <p class="text-sm text-gray-700 line-clamp-2">Time - City</p>
          </div>

          <div class="flex cursor-pointer items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 36 36"
              width="36px"
              height="36px"
            >
              <g id="surface60096684">
                <path
                  style="
                    stroke: none;
                    fill-rule: nonzero;
                    fill: rgb(98.039216%, 32.156864%, 32.156864%);
                    fill-opacity: 1;
                  "
                  d="M 15.601562 3.601562 C 15.277344 3.59375 14.96875 3.71875 14.742188 3.945312 C 14.511719 4.171875 14.382812 4.480469 14.382812 4.800781 L 7.199219 4.800781 C 6.765625 4.792969 6.363281 5.019531 6.148438 5.394531 C 5.929688 5.769531 5.929688 6.230469 6.148438 6.605469 C 6.363281 6.980469 6.765625 7.207031 7.199219 7.199219 L 28.800781 7.199219 C 29.234375 7.207031 29.636719 6.980469 29.851562 6.605469 C 30.070312 6.230469 30.070312 5.769531 29.851562 5.394531 C 29.636719 5.019531 29.234375 4.792969 28.800781 4.800781 L 21.617188 4.800781 C 21.617188 4.480469 21.488281 4.171875 21.257812 3.945312 C 21.03125 3.71875 20.722656 3.59375 20.398438 3.601562 Z M 7.199219 9.601562 L 7.199219 28.800781 C 7.199219 30.125 8.273438 31.199219 9.601562 31.199219 L 26.398438 31.199219 C 27.726562 31.199219 28.800781 30.125 28.800781 28.800781 L 28.800781 9.601562 Z M 7.199219 9.601562 "
                />
              </g>
            </svg>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAADdklEQVRYhe3YS2wbRRzH8e9/7CRuC1QRj3KoiF0BF1fQIhRbAgqhQaKIikvqS08cUJxQkMIRqagVnDnwyK44wKEHpKS8BFxopVRCKrZzIUY+FdWOkEAtAQo0qRNn58/BdeTHOg97g3ro7zSe2V19dvTfmV3D7VTzwPeT/cycCjf3y/8OmXWeEIsrsB+4AbgsRd4sDb1cBmgRbmcGZiePiOVzIHKzawcwwc4ywBuwzgw9eOm9Pvt3355V9baE1mWv/MuTr/3a3B/NTCYRuQD0+Zy2VFq6spuhU6stoFjOPWStnkR4RjqcQVEdLSbHP6rvixemehev/zEFvOR7Um+5v3Rw4pppwGSdE6o6I8JwpxgAjGitOZBxX4hlJh8pxFMru+64OwV81XoH/FQ6OHGt2qxhcu4hVZ0BDJAX9B0MeQ8qW7GIhG7MPz76G8C+rPOihc8U/jGqh4vJ8bzPTC2r2GfnB1+92AjKOucVDgN5liKJWtV3mhoG6AVQWPBBPW9g5HJi7Ju1G4JqAVf+7LkuEBaVY8Vk+myQmFoUFgwyXEyk5+KFqd7FfxceKyXHM/XHhAH0r9B9tZoRWc13g4nl3KNW9WwzBkDgHouej2Xd4UI8NQdkmo8xAJ5nQrUOa0Mr3WC0DaYOdZfF7m03btoNbDUDs5NHVHV6PQywgkpqPjH+7baCqiuwfIH/oteAKSXTrY99kKBYzj0qVr7cCCMiIzVMNOumo1lnNHDQZmqmhikOpr8GiOY+vB/UAdxqOyBQ9AcnupmaqccA4JmIb7tbkBqOs4maacBsIh2DBI5thNmogAMD7ct+8DDwaNCYjkEeZqTN0HL909RJOnvfEXkObej5UbHT0PNpafCVYqeYzkGWj9WAqp4LqZm+nExf6gbRNaiYHDsDnAkKUZ/A9rKgchu0UW5NUChkvbUO4623N3UdCevadhOW8KovSPq9qwqrAIpptwIHElVz4Gaz0nfn7qu+oJ8fen0Z5QKARd6KznzSsgsHkb0X392BcrL6S2YK8VTL6/LaOhTCnLbYIYH9urM8G8s5byM6t9XvMr+EoEfVHKhiNA54Kt5pv2MbPqWjOWcM5f3qNbYtHsiJUiLt+g02PGWlwTHHGp5GOEcAM9OUCsh3ijzVDgPr/PsRL0z1lhd/31MR6elW0qNaiey694pfzdzy+Q8N4mmy1oQp/wAAAABJRU5ErkJggg=="
            />
          </div>
        </div>

        <a href="#" class="px-6 block">
          <img
            alt="Art"
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="h-96 w-full object-cover"
          />

          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Activity Name
            <span
              class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500"
            >
              Type
            </span>
          </h3>

          <p class="mt-2 max-w-sm text-gray-700">Caption</p>
        </a>

        <div class="flex justify-end">
          <strong
            class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
          >
            <span class="text-[10px] font-medium sm:text-xs">Difficulty</span>
          </strong>
        </div>
      </article>
    </div>

    <!-- Form Change Profile -->
    <form class="container max-w-2xl mx-auto my-4 shadow-md md:w-3/4">
      <div class="p-4 rounded-lg bg-gray-100/5">
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <a href="#" class="relative block">
              <img
                alt="profil"
                src="/images/person/1.jpg"
                class="mx-auto object-cover rounded-full h-16 w-16"
              />
            </a>
            <h1 class="text-gray-600">Charlie</h1>
          </div>
        </div>
      </div>
      <div class="space-y-6 bg-white">
        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Email</h2>
          <div class="max-w-sm mx-auto md:w-2/3">
            <div class="relative">
              <input
                disabled
                type="text"
                id="user-info-email"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Full Name</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  type="text"
                  id="user-info-name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">City</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  type="text"
                  id="user-info-name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Date of Birth</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  type="date"
                  id="user-info-name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">New Password</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  type="text"
                  id="user-info-name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Confirm Password</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  type="text"
                  id="user-info-name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
          <button
            type="submit"
            class="py-2 px-4 bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
