<script>
import YouTube from "vue3-youtube";
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  data() {
    return {
      detail: {},
      trailerUrl: "",
    };
  },
  components: { YouTube },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler", "successHandler"]),
    async detailMovie({ id }) {
      try {
        const { data } = await axios.get(this.baseUrl + "/movies/" + id);
        this.detail = data;
      } catch (error) {
        this.errorHandler(error);
      }
    },
    async trailerMovie({ id }) {
      try {
        const { data } = await axios.get(
          this.baseUrl + "/movies/" + id + "/trailer"
        );
        this.trailerUrl = data.key;
      } catch (error) {
        this.errorHandler(error);
      }
    },
    async addBookmark() {
      try {
        const { access_token } = localStorage;
        const { title, poster_path: imgUrl, id: movie_id } = this.detail;
        const { data } = await axios.post(
          this.baseUrl + "/bookmark",
          {
            title,
            imgUrl,
            movie_id,
          },
          { headers: { access_token } }
        );
        this.successHandler(data.message);
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
  created() {
    this.detailMovie(this.$route.params);
    this.trailerMovie(this.$route.params);
  },
};
</script>

<template>
  <div class="detail">
    <div class="content">
      <div class="img">
        <img
          :src="'https://image.tmdb.org/t/p/original' + detail.poster_path"
        />
      </div>
      <div>
        <h1 style="color: black">{{ detail.original_title }}</h1>
        <h4 style="color: black">Overview</h4>
        <p style="color: black">
          {{ detail.overview }}
        </p>
        <div class="genre">
          <a v-for="el in detail.genres" :key="el.id">{{ el.name }}</a>
        </div>
        <a v-if="detail.homepage" target="_blank" :href="detail.homepage"
          >Visit official website
        </a>
        <div>
          <button @click="$router.go(-1)">Back</button>
          <button @click="addBookmark">&#10084; Add Bookmark</button>
        </div>
      </div>
    </div>
    <!-- <div class="content">3</div> -->
  </div>
  <YouTube
    v-if="trailerUrl"
    class="trailer"
    :src="'https://www.youtube.com/watch?v=' + trailerUrl"
    width="100%"
    height="100%"
  />
</template>
