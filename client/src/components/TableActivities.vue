<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/global";
import TableRowExercise from "@/components/TableRowExercise.vue";

export default {
  components: {
    TableRowExercise,
  },
  computed: {
    ...mapWritableState(useGlobalStore, ["exercises", 'filterForm']),
    ...mapState(useGlobalStore, ["types", "difficulties"]),
  },
  methods: {
    ...mapActions(useGlobalStore, [
      "fetchExercises",
      "fetchTypes",
      "fetchDifficulties",
    ]),
    previousPage() {
      if (this.exercises.currentPage > 1) {
        this.exercises.currentPage--;
      }

      this.fetchExercises();
    },
    nextPage() {
      this.exercises.currentPage++;

      this.fetchExercises();
    },
    filterExercise() {
      console.log('masuk');
      this.fetchExercises();
    }
  },
  created() {
    this.fetchExercises();
    this.fetchTypes();
    this.fetchDifficulties();
  },
};
</script>

<template>
  <!-- Table of Activities -->
  <div class="mx-10">
    <div class="flex justify-between my-2 items-center">
      <h2 class="font-bold my-2 items-self-start">Choose Activity:</h2>
    </div>

    <div class="flex justify-between gap-6">
      <div class="flex flex-col min-w-xl gap-2">
        <p class="text-sm font-medium">Filter by:</p>

        <select
          @change="filterExercise"
          v-model="filterForm.difficulty"
          class="block px-2 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="animals"
        >
          <option value="">Difficulty</option>
          <option v-for="difficulty in difficulties" :key="difficulty.id" :value="difficulty.name">
            {{ difficulty.name }}
          </option>
        </select>

        <select
          @change="filterExercise"
          v-model="filterForm.type"
          class="mt-1 block px-2 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="animals"
        >
          <option value="">Type</option>
          <option v-for="type in types" :key="type.id" :value="type.name">
            {{ type.name }}
          </option>
        </select>

        <form @submit.prevent="filterExercise">
          <p class="text-sm font-medium mt-4">Search by:</p>

          <div class="relative">
            <input
              v-model="filterForm.name"
              type="text"
              id="rounded-email"
              class="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              placeholder="Name"
            />
          </div>

          <button
            type="submit"
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
                class="flex justify-around whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                <div class="inline-flex justify-center gap-1">
                  <a
                    @click.prevent="previousPage"
                    href="#"
                    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                  >
                    <span class="sr-only">Prev Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  <div class="flex flex-col my-auto">
                    <label for="PaginationPage" class="sr-only">Page</label>
                    {{ exercises.currentPage }}
                  </div>

                  <a
                    @click.prevent="nextPage"
                    href="#"
                    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                  >
                    <span class="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <TableRowExercise
              v-for="exercise in exercises.exercises"
              :key="exercise.id"
              :exercise="exercise"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
