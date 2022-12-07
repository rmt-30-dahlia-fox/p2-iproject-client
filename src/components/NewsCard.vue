<script>
export default {
  props: ["news"],
  computed: {
    // dateFormatter() {
    //   return this.news.publishedAt.toLocaleDateString("en-CA")
    // },
  },
}
</script>
<template>
  <div
    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
    style="background-position: 50%"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light">
    <img :src="news.urlToImage" class="w-full" />
    <a>
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.4)">
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
