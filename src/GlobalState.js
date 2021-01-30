import React, { createContext, useState } from "react";
import MoviesAPI from "./api/MoviesAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [myMovies, setMyMovies] = useState([]);
  const [myWatchedMovies, setMyWatchedMovies] = useState([]);

  const state = {
    moviesAPI: MoviesAPI(),
    myMovies: [myMovies, setMyMovies],
    myWatchedMovies: [myWatchedMovies, setMyWatchedMovies],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
