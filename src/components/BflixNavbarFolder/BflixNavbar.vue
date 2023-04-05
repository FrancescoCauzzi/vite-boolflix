<script>
import { store } from "../../store.js";

export default {
  name: "BflixNavbar",
  //   inject: ["fetchData"],
  data() {
    return {
      store,
    };
  },
  components: {},
  methods: {},
  computed: {
    isDisabled() {
      return this.store.userInput === "";
    },
    allGenres() {
      let allGenres = [...this.store.tvGenres, ...this.store.movieGenres];
      let allGenresSingle = allGenres.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      let genres = allGenresSingle.map((value, index, self) => value.name);
      return ["All", ...genres.sort()];
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <a class="navbar-brand p-1 d-flex" href="#">
          <img src="/img/logo.png" alt="" />
        </a>
        <h1 class="px-0 text-white">BoolFlix</h1>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end __collapse-navbar"
        id="navbarSupportedContent"
      >
        <div class="d-flex gap-2">
          <div
            class="__search-title fw-bold d-flex align-items-center text-white"
          >
            Search for an item in our movies and series database
          </div>
          <label for="selectExample" class="text-white fw-bold"
            >Select a genre</label
          >
          <select
            class="form-select __my-form-select px-3 w-25"
            aria-label="Default select example"
            id="selectExample"
            v-model="this.store.selectedGenre"
          >
            <option v-for="item in allGenres" value="">
              {{ item }}
            </option>
          </select>

          <input
            class="form-control w-25 me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="this.store.userInput"
            @keyup.enter="$emit('searchMovie')"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            @click="$emit('searchMovie')"
            :disabled="isDisabled"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
