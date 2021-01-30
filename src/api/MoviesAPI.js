import { useState, useEffect } from "react";
import axios from "axios";

function MoviesAPI() {
  const apikey = "be84def70adb9380f8bb21eb9e72211e";

  const [inputApiSearch, setInputApiSearch] = useState("");
  const [moviesResult, setMoviesResult] = useState([]);
  const [threeMoviesResult, setThreeMoviesResult] = useState([]);

  useEffect(() => {
    if (inputApiSearch.length > 0) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${inputApiSearch}&api_key=${apikey}`
        )
        .then((result) => {
          setMoviesResult(result.data.results);
          setThreeMoviesResult(result.data.results.slice(0, 3));
        })
        .catch(console.log);
    }
  }, [inputApiSearch]);

  return {
    moviesResult: [moviesResult, setMoviesResult],
    threeMoviesResult: [threeMoviesResult, setThreeMoviesResult],
    inputApiSearch: [inputApiSearch, setInputApiSearch],
  };
}

export default MoviesAPI;
