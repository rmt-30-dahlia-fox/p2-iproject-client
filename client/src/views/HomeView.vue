<script >
</script>

<template>
  <main>
    <h1 class="text-center ">Manga List</h1>
    <div class="container">
      <div class="row">
        <MovieCard v-for="movie in dataMovies" :key="movie.id" :movie="movie" />
      </div>
    </div>
        <!-- <div class="d-flex justify-content-center">
          <vue-awesome-paginate
         :total-items="totalMovie" 
         :items-per-page="8" 
         :max-pages-shown="8" 
         v-model="currentPage" 
         @click="fetchMovies" />
        </div> -->
  </main>
</template>
