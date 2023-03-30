<script>
//import { store } from "../../store.js";
export default {
  name: "BflixNavbarInput",
  data() {
    return {
      //store,
    };
  },
};
</script>
<template>
  <form class="d-flex">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="store.userInput"
    />
    <button
      class="btn btn-outline-success"
      type="submit"
      @click="$emit('searchMovie')"
    >
      Search
    </button>
  </form>
</template>
<style scoped></style>
