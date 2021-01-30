import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import MovieDetail from "../MovieDetail/MovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import MyMoviesFilter from "../MyMoviesFilter/MyMoviesFilter";

function MyMovies() {
  const state = useContext(GlobalState);
  const [myMovies, setMyMovies] = state.myMovies;
  // const [myUnwatchedMovies, setMyUnwatchedMovies] = useState([]);
  const [myWatchedMovies, setMyWatchedMovies] = state.myWatchedMovies;
  const [showUnwatched, setShowUnwatched] = useState(true);
  const [showWatched, setShowWatched] = useState(false);
  const [myMoviesFilter, setMyMoviesFilter] = useState("");

  const handleWatched = (movie) => {
    setMyWatchedMovies([...myWatchedMovies, movie]);
    const myMoviesFiltered = myMovies.filter(
      (myMovie) => myMovie.id !== movie.id
    );
    setMyMovies(myMoviesFiltered);
  };

  const handleDeletion = (movie) => {
    const myWatchedMoviesFiltered = myWatchedMovies.filter(
      (myWatchedMovie) => myWatchedMovie.id !== movie.id
    );
    setMyWatchedMovies(myWatchedMoviesFiltered);
  };

  const handleWatchedUnwatched = (e) => {
    if (e.target.parentNode.className === "watched-unwatched") {
      if (e.target.className === "watched") {
        setShowWatched(true);
        setShowUnwatched(false);
      } else if (e.target.className === "unwatched") {
        setShowWatched(false);
        setShowUnwatched(true);
      }
    } else if (e.target.parentNode.className === "unwatched") {
      setShowWatched(false);
      setShowUnwatched(true);
    } else if (e.target.parentNode.className === "watched") {
      setShowWatched(true);
      setShowUnwatched(false);
    }
  };

  return (
    <div className="mymovies-container">
      <div className="mymovies-top">
        <div className="watched-unwatched" onClick={handleWatchedUnwatched}>
          <div className="unwatched">
            <FontAwesomeIcon
              icon={faEyeSlash}
              color={showUnwatched ? "#699db6" : "#767676"}
              style={{
                transitionDuration: "0.1s",
              }}
            />
            <span
              style={{
                cursor: "pointer",
                color: showUnwatched ? "#699db6" : "#767676",
              }}
            >
              Unwatched
              <div
                style={{
                  opacity: showUnwatched ? "1" : "0",
                  transition: "0.5s",
                }}
              >
                <hr />
              </div>
            </span>
          </div>
          <div className="watched" onClick={handleWatchedUnwatched}>
            <FontAwesomeIcon
              icon={faEye}
              color={showUnwatched ? "#767676" : "#699db6"}
              style={{
                transitionDuration: "0.1s",
              }}
            />
            <span
              style={{
                cursor: "pointer",
                color: showUnwatched ? "#767676" : "#699db6",
              }}
            >
              Watched
              <div
                style={{ opacity: showWatched ? "1" : "0", transition: "0.5s" }}
              >
                <hr />
              </div>
            </span>
          </div>
        </div>
        <div className="filter-container">
          <MyMoviesFilter
            inputValue={(value) => {
              setMyMoviesFilter(value);
            }}
          />
        </div>
      </div>
      <div
        class="unwatched-movies-wrapper"
        style={{ display: showUnwatched ? "block" : "none" }}
      >
        {myMovies.length
          ? myMovies
              .filter((movie) =>
                movie.title.toLowerCase().includes(myMoviesFilter.toLowerCase())
              )
              .map((movie) => (
                <MovieDetail
                  addWatched={(watchedMovie) => handleWatched(watchedMovie)}
                  movie={movie}
                  title={movie.title}
                  movieImg={movie.backdrop_path}
                  vote={movie.vote_average}
                  year={movie.release_date}
                  overview={movie.overview}
                  popularity={movie.popularity}
                  buttonMsg={"watched it"}
                />
              ))
          : ""}
      </div>

      <div
        class="watched-movies-wrapper"
        style={{ display: showWatched ? "block" : "none" }}
      >
        {myWatchedMovies.length
          ? myWatchedMovies
              .filter((movie) =>
                movie.title.toLowerCase().includes(myMoviesFilter.toLowerCase())
              )
              .map((movie) => (
                <MovieDetail
                  removeMovie={(movieToRemove) => handleDeletion(movieToRemove)}
                  movie={movie}
                  title={movie.title}
                  movieImg={movie.backdrop_path}
                  vote={movie.vote_average}
                  year={movie.release_date}
                  overview={movie.overview}
                  popularity={movie.popularity}
                  buttonMsg={"Remove"}
                />
              ))
          : ""}
      </div>
    </div>
  );
}

export default MyMovies;
