<script>
// Flag-icons
import "/node_modules/flag-icons/css/flag-icons.min.css";
// axios
import axios from "axios";
import { store } from "../../store.js";
export default {
  name: "BflixMainCard",
  data() {
    return {
      store,
      showDetails: false,
      showImage: true,
      actors: [],
    };
  },
  methods: {
    async getActors() {
      let id = String(this.movieId);
      let apiKey = this.store.apiKey;
      try {
        if (this.mediaType === "movie") {
          let moviesResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
          );
          this.actors = moviesResponse.data.cast;
          //console.log(this.actors);
        } else if (this.mediaType === "tv") {
          let tvSeriesResponse = await axios.get(
            `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`
          );
          //console.log(tvSeriesResponse.data.cast);
          this.actors = tvSeriesResponse.data.cast;
          //console.log(this.actors);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return;
      }
    },
  },
  mounted() {
    this.getActors();
  },
  props: {
    title: String,
    origTitle: String,
    origLang: String,
    rating: Number,
    mediaType: String,
    posterImage: String,
    itemOverview: String,
    country: Array,
    movieId: Number,
    genres: Array,
  },
  computed: {
    flagThumb() {
      let lang = this.origLang;
      //console.log(this.country);
      // qui si possono usare degli switch invece che una serie di if
      if (lang === "en") lang = "gb";

      if (this.country && this.country[0] === "US") {
        lang = "us";
      }
      if (lang === "ja") lang = "jp";
      if (lang === "zh") lang = "cn";
      if (lang === "ko") lang = "kr";
      if (lang === "uk") lang = "ua";
      if (lang === "hi") lang = "in";
      if (lang === "he") lang = "il";
      if (lang === "fa") lang = "ir";
      if (lang === "ar") lang = "dz";
      if (lang === "el") lang = "gr";

      return lang;
    },
    ratingRounded() {
      let rating = this.rating;
      return Math.ceil(rating / 2);
    },
    actorsINeed() {
      let actorsIneed = this.actors.slice(0, 5);
      return actorsIneed;
    },
    mediaGenres() {
      let genresMovie = [];
      let genresTv = [];
      if (this.mediaType === "movie") {
        for (let i = 0; i < this.store.movieGenres.length; i++) {
          if (this.genres.includes(this.store.movieGenres[i].id)) {
            genresMovie.push(this.store.movieGenres[i].name);
          }
        }
        //console.log(genresMovie);
        return genresMovie;
      }
      if (this.mediaType === "tv") {
        for (let i = 0; i < this.store.tvGenres.length; i++) {
          if (this.genres.includes(this.store.tvGenres[i].id)) {
            genresTv.push(this.store.tvGenres[i].name);
          }
        }
        //console.log(genresTv);
        return genresTv;
      }
    },
  },
};
</script>
<template>
  <!-- genero la carta solo se il media type �� "movie" o "tv" -->
  <div
    v-if="mediaType === 'movie' || mediaType === 'tv'"
    class="__card d-flex flex-column"
    @mouseover="(showImage = false), (showDetails = true)"
    @mouseleave="(showImage = true), (showDetails = false)"
  >
    <img
      v-if="showImage && posterImage"
      class="__poster-image"
      :src="`https://www.themoviedb.org/t/p/w342${posterImage}`"
      alt=""
      srcset=""
    />
    <div class="__card-body p-3" v-if="showDetails || !posterImage">
      <div class="__card-header">
        <h5 class="__card-title">{{ title }}</h5>
        <h6 class="__card-orig-title">Original title: {{ origTitle }}</h6>
        <h6 class="d-flex gap-2">
          {{ mediaType === "tv" ? "Tv Series" : "Movie" }}
          <span
            ><img
              v-if="flagThumb"
              id="flag"
              :src="`https://flagcdn.com/20x15/${flagThumb}.png`"
              alt=""
          /></span>
        </h6>
        <div
          v-if="mediaGenres && mediaGenres.length > 0"
          class="__mediaGenres mb-2"
        >
          <span class="fw-bold">{{
            mediaGenres.length > 1 ? "Genres " : "Genre "
          }}</span>
          <br />
          <span v-for="(item, index) in mediaGenres">{{
            index === mediaGenres.length - 1 ? `${item}.` : `${item}, `
          }}</span>
        </div>

        <div class="__overview">
          <p>
            <span class="fw-bold">Overview</span> <br />

            {{ itemOverview ? itemOverview : "Overview not Available" }}
          </p>
        </div>
        <div class="__card-rate mb-2">
          <div class="__rate-title fw-bold">Rating</div>
          <div class="d-flex gap-1">
            <span
              ><i
                v-for="rate in ratingRounded"
                class="__star fa-solid fa-star"
              ></i
              ><i
                v-for="rate in 5 - ratingRounded"
                class="__star fa-regular fa-star"
              ></i>
            </span>
            <!-- <span v-else>No rating available</span> -->
          </div>
        </div>
        <!-- soluzione trovata in https://stackoverflow.com/questions/67810225/why-does-this-computed-property-return-promise-pending -->
        <div class="__actors-list">
          <span class="fw-bold">Cast</span>

          <div
            v-if="this.actors && this.actors.length > 0"
            v-for="actor in actorsINeed"
          >
            {{ actor.name }}
          </div>
          <div v-else>Data about the cast is not available</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__card {
  /* flex-shrink: 0; */
  width: calc(100% / 3 * 1 - (20px / 3 * 2));
  min-width: 300px;
  position: relative;
  overflow-y: auto;
  border: 2px solid black;
  box-shadow: 2px 2px black;
  min-height: 450px;
}

.__card-body {
  position: absolute;
  top: 0%;
  color: white;
  /* background-color: rgba(237, 226, 226, 0.529); */

  width: 100%;

  min-height: 100%;
}

.__poster-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#flag {
  margin-top: -4px;
}

.__star {
  color: gold;
}
</style>
