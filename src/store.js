// api key: ea39885f75d08d11ec8cebda7fc8b91f
// esempio di richiesta API: https://api.themoviedb.org/3/movie/550?api_key=ea39885f75d08d11ec8cebda7fc8b91f
import { reactive } from "vue";
export const store = reactive({
  // variables to use globally
  apiKey: "ea39885f75d08d11ec8cebda7fc8b91f",
  movies: [],
  loading: false,
  tvGenres: [],
  movieGenres: [],
  selectedGenre: "",

  userInput: "",
});

let array = [
  { id: 3, name: "Amber" },
  { id: 4, name: "John" },
];
