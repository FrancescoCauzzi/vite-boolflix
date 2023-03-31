<script>
// Flag-icons
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from "../../store.js";
export default {
  name: "BflixMainCard",
  data() {
    return {
      store,
      showDetails: false,
      showImage: true,
    };
  },
  props: {
    title: String,
    origTitle: String,
    origLang: String,
    rating: Number,
    mediaType: String,
    posterImage: String,
    itemOerview: String,
    country: Array,
  },
  computed: {
    flagThumb() {
      let lang = this.origLang;
      console.log(this.country);
      if (lang === "en") lang = "gb";

      if (this.country && this.country[0] === "US") {
        lang = "us";
      }
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
  <div
    class="__card d-flex flex-column"
    @mouseover="(showImage = false), (showDetails = true)"
    @mouseleave="(showImage = true), (showDetails = false)"
  >
    <img
      v-if="showImage"
      class="poster-image"
      :src="`https://www.themoviedb.org/t/p/w342${posterImage}`"
      alt=""
      srcset=""
    />
    <div class="__card-body px-2 py-3" v-if="showDetails">
      <div class="__card-header">
        <h5 class="__card-title">{{ title }}</h5>
        <h6 class="__card-orig-title">Original title: {{ origTitle }}</h6>
        <h6 class="d-flex gap-2">
          {{ mediaType }}
          <span
            ><img :src="`https://flagcdn.com/20x15/${flagThumb}.png`" alt=""
          /></span>
        </h6>

        <div class="__lang-flag">
          <!-- <span :class="`fi fi-${flagThumb}`"></span> -->
        </div>
        <div class="__overview">
          <p>Overview: {{ itemOerview }}</p>
        </div>
        <div class="__card-rate">
          <div class="__rate-title fw-bold">Rating</div>
          <div class="d-flex gap-1">
            <span v-for="rate in ratingRounded"
              ><i class="__star fa-solid fa-star"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__card {
  width: calc(100% / 3 * 1 - (20px / 3 * 2));
  min-width: 130px;
  position: relative;
  overflow-y: auto;
}

.__card-body {
  position: absolute;
  top: 0%;
  background-color: azure;
  min-height: 100%;
}

img {
  margin-top: -4px;
}

.__star {
  color: gold;
}
</style>
