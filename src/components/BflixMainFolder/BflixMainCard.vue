<script>
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
    flagUrl() {
      const countryCode = this.getCountryCode(this.origLang);
      console.log(countryCode);
      return `https://flagcdn.com/w40/${countryCode}.png`;
    },
  },
  methods: {
    async getCountryCode(languageCode) {
      const response = await fetch(
        `https://restcountries.com/v3.1/lang/${languageCode}`
      );
      const data = await response.json();
      console.log(data);
      const countryCode = data[0]?.cca2;
      return countryCode || "unknown";
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
        <h6 class="__card-orig-lang">Original language: {{ origLang }}</h6>
        <img :src="flagUrl" alt="Language flag" />
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
