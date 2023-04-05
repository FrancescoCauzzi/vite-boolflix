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
      let allGenresSingle = allGenres.filter((current, index, self) => {
        return index === self.findIndex((item) => item.name === current.name);
      });
      console.log(allGenres);
      return [
        { id: 999999, name: "All" },
        ...allGenresSingle.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
      ];
      // let genres = allGenresSingle.map((value, index, self) => value.name);
      // return ["All", ...genres.sort()];
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark py-3">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <a class="navbar-brand p-0 d-flex" href="#">
          <img src="/img/logo.png" alt="" />
        </a>
        <h1 class="text-white">BoolFlix</h1>
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
        <div class="d-flex gap-3 align-items-end">
          <div
            class="__search-title fw-bold d-flex align-items-center text-white fs-5 px-1"
          >
            Search in our movies and series database
          </div>
          <div class="__label-select d-flex flex-column gap-1">
            <label for="selectExample" class="text-white fw-bold"
              >Select a genre</label
            >
            <select
              class="form-select __my-form-select px-3"
              aria-label="Default select example"
              id="selectExample"
              v-model="this.store.selectedGenre"
            >
              <option v-for="item in allGenres" :value="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="__label-input w-25">
            <label for="searchInput" class="text-white fw-bold"
              >Search your movie or series</label
            >
            <input
              id="searchInput"
              class="form-control me-2 __input-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="this.store.userInput"
              @keyup.enter="$emit('searchMovie')"
            />
          </div>

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

<style scoped>
.__search-title {
  min-width: 395px;
}

.__my-form-select,
.__input-search {
  height: 35px;
}

/* .__input-search {
  height: 40px;
} */
</style>
