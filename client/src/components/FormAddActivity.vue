<script>
import { mapActions, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/global";

export default {
  props: ['exerciseChoosen'],
  computed: {
    ...mapWritableState(useGlobalStore, ['activityForm'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['handleAddActivity']),
    setImageToSend(event) {
      this.activityForm.imageActivity = event.target.files[0];
    },
  }
}
</script>

<template>
  <!-- Form Add Post -->
  <div class="flex flex-col mx-auto my-2 max-w-xl">
    <label class="font-bold mt-4 mb-2 text-left"
      >Activity Name: {{ exerciseChoosen.name }}</label
    >
    <label class="font-bold mb-2 text-left">Type: {{ exerciseChoosen.type.name }}</label>
    <label class="font-bold mb-4 text-left">
      Difficulty:
      <strong
        class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
      >
      {{ exerciseChoosen.difficulty.name }}
      </strong>
    </label>

    <form @submit.prevent="handleAddActivity" class="">
      <label class="font-bold mt-4 mb-2 text-left">Caption: </label>
      <textarea
        v-model="activityForm.caption"
        id="UserEmail"
        placeholder="Write your story here!"
        class="mt-1 p-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
      ></textarea>

      <label class="font-bold mt-4 mb-2 text-left"
        >Upload your image of doing this activity:
      </label>
      <input 
        type="file"
        @change="setImageToSend"
      >

      <button
        type="submit"
        class="my-4 py-2 px-4 bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Post
      </button>
    </form>
  </div>
</template>
