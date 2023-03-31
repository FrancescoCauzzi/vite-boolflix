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
  <div class="container-fluid py-5 __container-outer">
    <div class="container __cards-container">
      <BflixMainCard
        v-for="item in store.movies"
        :title="item.media_type === 'movie' ? item.title : item.name"
        :origTitle="
          item.media_type === 'movie' ? item.original_title : item.original_name
        "
        :origLang="item.original_language"
        :rating="item.vote_average"
        :mediaType="item.media_type === 'tv' ? 'Tv series' : 'Movie'"
      ></BflixMainCard>
    </div>
  </div>
</template>
<style>
.__container-outer {
  min-height: 87vh;
  background-color: grey;
}

.__cards-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
