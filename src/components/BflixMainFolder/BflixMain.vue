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
    <div class="container __cards-container text-center py-5">
      <!-- voglio mettere un immagine di sfondo che si visualizza quando si accede alla pagina -->

      <BflixMainCard
        v-if="!this.store.loading"
        v-for="item in store.movies"
        :title="item.media_type === 'movie' ? item.title : item.name"
        :origTitle="
          item.media_type === 'movie' ? item.original_title : item.original_name
        "
        :origLang="item.original_language"
        :rating="item.vote_average"
        :mediaType="item.media_type === 'tv' ? 'Tv series' : 'Movie'"
        :posterImage="item.poster_path"
        :itemOverview="item.overview"
        :country="item.origin_country"
      ></BflixMainCard>
    </div>
  </div>
</template>
<style>
.container-fluid.__container-outer {
  background-color: grey;
  padding-left: 0;
  padding-right: 0;
  overflow: auto;
  height: 85vh;
}

#blockbuster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.__cards-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
