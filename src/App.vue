<script>
import { store } from "./store.js";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    async fetchData() {
      const apiKey = "ea39885f75d08d11ec8cebda7fc8b91f";
      const query = encodeURIComponent(this.store.userInput); // replace with your desired movie title

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<template>
  <div>
    <button @click="fetchData()">Click</button>
  </div>
</template>

<style scoped></style>
