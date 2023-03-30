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
        :title="item.title"
        :origTitle="item.original_title"
        :origLang="item.original_language"
        :rating="item.vote_average"
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
