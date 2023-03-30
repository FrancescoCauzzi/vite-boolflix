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
    <div class="container __cards-container"></div>
  </div>
</template>
<style>
.__container-outer {
  min-height: 87vh;
  background-color: grey;
}
</style>
