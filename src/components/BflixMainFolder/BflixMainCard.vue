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
    mediaType: String,
    posterImage: String,
  },
  computed: {
    flagThumb() {
      let lang = this.origLang;
      if (lang === "en") lang = "gb";
      if (lang === "ja") lang = "jp";
      if (lang === "zh") lang = "cn";
      if (lang === "ko") lang = "kr";
      if (lang === "uk") lang = "ua";

      return lang;
    },
    ratingRounded() {
      let rating = this.rating;
      return Math.ceil(rating / 2);
    },
  },
};
</script>
<template>
  <div class="__card d-flex flex-column">
    <div class="__card-body">
      <img
        class="poster-image"
        :src="`https://www.themoviedb.org/t/p/w185${posterImage}`"
        alt=""
        srcset=""
      />
      <div class="__card-header">
        <h5 class="__card-title">{{ title }}</h5>
        <h6 class="__card-orig-title">Original title: {{ origTitle }}</h6>
        <h6>{{ mediaType }}</h6>
        <div class="__card-orig-lang d-flex align-items-center gap-2">
          <span> Original language:</span>
          <span
            ><img :src="`https://flagcdn.com/20x15/${flagThumb}.png`" alt=""
          /></span>
        </div>

        <div class="__lang-flag">
          <!-- <span :class="`fi fi-${flagThumb}`"></span> -->
        </div>
        <div class="__card-rate d-flex gap-1">
          <span v-for="rate in ratingRounded"
            ><i class="__star fa-solid fa-star"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__card {
  width: calc(100% / 5 * 1 - (20px / 5 * 4));
  min-width: 130px;
}

img {
  margin-top: -3px;
}

.__star {
  color: gold;
}
</style>
