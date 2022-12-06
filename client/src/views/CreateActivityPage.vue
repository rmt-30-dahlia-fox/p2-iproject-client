<script></script>

<template>
  <!-- Create Activity Page -->
  <div class="container w-xl mx-auto flex flex-col">
    <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
      Create New Post
    </h1>

    <!-- Table of Activities -->
    <div class="mx-10">
      <div class="flex justify-between my-2 items-center">
        <h2 class="font-bold my-2 items-self-start">Choose Activity:</h2>
      </div>

      <div class="flex justify-between gap-6">
        <div class="flex flex-col min-w-xl gap-2">
          <p class="text-sm font-medium">Filter by:</p>

          <select
            class="block px-2 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="animals"
          >
            <option value="">Difficulty</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>

          <select
            class="mt-1 block px-2 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="animals"
          >
            <option value="">Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>

          <form>
            <p class="text-sm font-medium mt-4">Search by:</p>

            <div class="relative">
              <input
                type="text"
                id="rounded-email"
                class="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                placeholder="Name"
              />
            </div>

            <button
              type="button"
              class="py-1 px-2 mt-2 bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Search
            </button>
          </form>
        </div>

        <div
          class="grow overflow-hidden overflow-x-auto rounded-lg border border-gray-200"
        >
          <table class="min-w-full divide-y divide-gray-200 text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  <div class="flex items-center gap-2">No</div>
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  <div class="flex items-center gap-2">Name</div>
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  <div class="flex items-center gap-2">Type</div>
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Difficulty
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                ></th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr>
                <td
                  class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                >
                  1
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  Incline Hammer Curls
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  strength
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <strong
                    class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                  >
                    beginner
                  </strong>
                </td>
                <td
                  class="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-end"
                >
                  <button
                    type="button"
                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-fit transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Choose
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Form Add Post -->
    <div class="flex flex-col mx-auto my-2 max-w-xl">
      <label class="font-bold mt-4 mb-2 text-left"
        >Activity Name: Incline Hammer Curls</label
      >
      <label class="font-bold mb-2 text-left">Type: strength</label>
      <label class="font-bold mb-4 text-left">
        Difficulty:
        <strong
          class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
        >
          beginner
        </strong>
      </label>

      <form class="">
        <label class="font-bold mt-4 mb-2 text-left">Caption: </label>
        <textarea
          id="UserEmail"
          placeholder="Write your story here!"
          class="mt-1 p-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        ></textarea>

        <label class="font-bold mt-4 mb-2 text-left"
          >Upload your image of doing this activity:
        </label>
        <button
          type="button"
          class="mt-1 max-w-fit py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
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
              d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"
            ></path>
          </svg>
          Upload
        </button>
        <img
          src="./ERD-iProject-HackFit.jpg"
          width="1000"
          alt=""
          class="my-2"
        />

        <button
          type="button"
          class="my-4 py-2 px-4 bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Post
        </button>
      </form>
    </div>
  </div>
</template>
