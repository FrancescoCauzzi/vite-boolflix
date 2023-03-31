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
  methods: {
    async fetchData() {
      if (this.store.userInput.trim()) {
        const apiKey = "ea39885f75d08d11ec8cebda7fc8b91f";
        const query = encodeURIComponent(this.store.userInput); // replace with your desired movie title

        try {
          console.log("Hello");
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`
          );

          this.store.movies = response.data.results;
          console.log(this.store.movies);
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
