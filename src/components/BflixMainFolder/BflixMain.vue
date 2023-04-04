<script>
import BflixMainCard from "./BflixMainCard.vue";
import { store } from "../../store.js";
export default {
  name: "BflixMain",
  data() {
    return {
      store,
    };
  },
  components: {
    BflixMainCard,
  },
  computed: {
    computedMovies() {
      return this.store.movies.filter(function (item) {
        return item.media_type === "movie";
      });
    },
    computedSeries() {
      return this.store.movies.filter(function (item) {
        return item.media_type === "tv";
      });
    },
  },
};
</script>
<template>
  <div class="container-fluid __container-outer">
    <img
      v-if="this.store.movies.length === 0"
      id="blockbuster"
      src="/img/blockbuster_nostalgia.webp"
      alt=""
      srcset=""
    />
    <div
      v-if="this.store.movies.length !== 0 && this.store.loading === false"
      class="container __container-inner py-3"
    >
      <div v-if="computedMovies.length > 0" class="mb-4">
        <h5 class="text-white">Movies</h5>
        <div class="__movies-cards-container">
          <BflixMainCard
            v-for="item in computedMovies"
            :title="item.media_type === 'movie' ? item.title : item.name"
            :origTitle="
              item.media_type === 'movie'
                ? item.original_title
                : item.original_name
            "
            :origLang="item.original_language"
            :rating="item.vote_average"
            :mediaType="item.media_type"
            :posterImage="item.poster_path"
            :itemOverview="item.overview"
            :country="item.origin_country"
            :movieId="item.id"
            :genres="item.genre_ids"
          ></BflixMainCard>
        </div>
      </div>
      <div v-if="computedSeries.length > 0">
        <h5 class="text-white">TV Series</h5>
        <div class="__series-class-container">
          <BflixMainCard
            v-for="item in computedSeries"
            :title="item.media_type === 'movie' ? item.title : item.name"
            :origTitle="
              item.media_type === 'movie'
                ? item.original_title
                : item.original_name
            "
            :origLang="item.original_language"
            :rating="item.vote_average"
            :mediaType="item.media_type"
            :posterImage="item.poster_path"
            :itemOverview="item.overview"
            :country="item.origin_country"
            :movieId="item.id"
            :genres="item.genre_ids"
          ></BflixMainCard>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container-fluid.__container-outer {
  background-color: rgb(16, 16, 16);
  padding-left: 0;
  padding-right: 0;
  overflow-y: scroll;

  height: 85vh;
}

#blockbuster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.__container-inner {
  width: 100%;
}

.__movies-cards-container,
.__series-class-container {
  display: flex;
  gap: 1.5px;
  overflow-x: auto;
}
/* .__cards-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
} */
</style>
