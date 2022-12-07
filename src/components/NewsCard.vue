<script>
import { mapActions, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"
import PictureLoader from "./PictureLoader.vue"
export default {
  components: {
    PictureLoader,
  },
  props: ["news"],
  methods: {
    ...mapActions(useCounterStore, ["addFavorites"]),
  },
  computed: {
    // dateFormatter() {
    //   return this.news.publishedAt.toLocaleDateString("en-CA")
    // },
    ...mapWritableState(useCounterStore, ["loadPict"]),
  },
}
</script>
<template>
  <PictureLoader v-if="loadPict" />
  <div
    v-else
    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
    style="background-position: 50%"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light">
    <img :src="news.urlToImage" class="w-full" />
    <a class="cursor-pointer">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.4)">
        <button
          @click.prevent="
            addFavorites({
              title: news.title,
              description: news.description,
              urlToImage: news.urlToImage,
            })
          "
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          Add Favorite
        </button>
        <div class="flex justify-start items-end h-full">
          <div class="text-white m-6">
            <a :href="news.url" target="_blank" class="font-bold text-lg mb-3">{{
              news.title
            }}</a>
            <p>
              <small
                >Published <u>{{ news.publishedAt }}</u> by {{ news.author }}</small
              >
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
