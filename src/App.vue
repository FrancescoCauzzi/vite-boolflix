<script>
import BflixNavbar from "./components/BflixNavbarFolder/BflixNavbar.vue";
import BflixFooter from "./components/BflixFooter.vue";
import BflixMain from "./components/BflixMainFolder/BflixMain.vue";

// axios
import axios from "axios";

// Store
import { store } from "./store.js";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    BflixNavbar,
    BflixMain,
    BflixFooter,
  },
  mounted() {
    this.getMovieGenres();
    this.getTvGenres();
  },
  methods: {
    async getTvGenres() {
      this.store.loading = true;

      let apiKey = this.store.apiKey;

      try {
        let tvResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`
        );
        this.store.tvGenres = tvResponse.data.genres;
        this.store.loading = false;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async getMovieGenres() {
      this.store.loading = true;

      let apiKey = this.store.apiKey;

      try {
        let movieResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        this.store.movieGenres = movieResponse.data.genres;
        this.store.loading = false;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData() {
      this.store.loading = true;
      if (this.store.userInput.trim()) {
        const apiKey = this.store.apiKey;
        const query = encodeURIComponent(this.store.userInput);

        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`
          );

          this.store.movies = response.data.results;
          console.log(this.store.movies);
          console.log(this.store.tvGenres);
          console.log(this.store.movieGenres);
          this.store.loading = false;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    },
  },
};
</script>

<template>
  <BflixNavbar @search-movie="fetchData"></BflixNavbar>
  <BflixMain></BflixMain>
  <BflixFooter></BflixFooter>
</template>

<style scoped></style>
