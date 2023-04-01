import { reactive } from "vue";

// api key: ea39885f75d08d11ec8cebda7fc8b91f
// esempio di richiesta API: https://api.themoviedb.org/3/movie/550?api_key=ea39885f75d08d11ec8cebda7fc8b91f
export const store = reactive({
  // variables to use globally
  apiKey: "ea39885f75d08d11ec8cebda7fc8b91f",
  movies: [],
  loading: false,
  tvGenres: [],
  movieGenres: [],

  userInput: "",
});
