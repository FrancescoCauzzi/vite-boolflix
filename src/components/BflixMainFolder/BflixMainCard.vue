<script>
// Flag-icons
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from "../../store.js";
export default {
  name: "BflixMainCard",
  data() {
    return {
      store,
    };
  },
  props: {
    title: String,
    origTitle: String,
    origLang: String,
    rating: Number,
  },
  computed: {
    flagThumb() {
      let lang = this.origLang;
      if (lang === "en") lang = "gb";
      if (lang === "ja") lang = "jp";
      if (lang === "zh") lang = "cn";
      if (lang === "ko") lang = "kr";

      return lang;
    },
  },
};
</script>
<template>
  <div class="__card d-flex flex-column">
    <div class="__card-body">
      <div class="__card-header">
        <h5 class="__card-title">Title: {{ title }}</h5>
        <h5 class="__card-orig-title">Original title: {{ origTitle }}</h5>
        <div class="__card-orig-lang d-flex align-items-center gap-2">
          <span> Original language:</span>
          <span
            ><img :src="`https://flagcdn.com/20x15/${flagThumb}.png`" alt=""
          /></span>
        </div>

        <div class="__lang-flag">
          <!-- <span :class="`fi fi-${flagThumb}`"></span> -->
        </div>
        <h6 class="__card-rate">Rating: {{ rating }}</h6>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__card {
  width: calc(100% / 5 * 1 - (20px / 5 * 4));
  min-width: 130px;
}
</style>
