import React, { useState, useEffect, useContext, useRef } from "react";
import { GlobalState } from "../../GlobalState";
import SearchDetail from "../SearchDetail/SearchDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../utils/Button";
import onClickOutside from "react-onclickoutside";

function Searcher() {
  const state = useContext(GlobalState);
  const [moviesResult] = state.moviesAPI.moviesResult;
  const [inputApiSearch, setInputApiSearch] = state.moviesAPI.inputApiSearch;
  const [showSearchUl, setShowSearchUl] = useState(false);
  const [myMovies, setMyMovies] = state.myMovies;
  Searcher.handleClickOutside = () => setShowSearchUl(false);

  const handleInputChange = (e) => {
    setInputApiSearch(e.target.value);
  };

  const handleClick = (movie) => {
    if (movie) {
      setMyMovies([...myMovies, movie]);
      setShowSearchUl(false);
    }
  };

  useEffect(() => {
    if (inputApiSearch.length > 0) {
      setShowSearchUl(true);
    } else {
      setShowSearchUl(false);
    }
  }, [inputApiSearch]);

  return (
    <div className="searcher-container">
      <div className="input-button-wrapper">
        <div>
          <FontAwesomeIcon
            icon={faSearch}
            color="#c7c7c7"
            style={{ position: "relative", left: "6%" }}
          />
          <input
            type="text"
            value={inputApiSearch}
            onChange={(e) => {
              handleInputChange(e);
            }}
            placeholder="Search"
          />

          <span
            onClick={() => setInputApiSearch("")}
            style={{
              position: "relative",
              right: "6%",
              display: inputApiSearch.length > 0 ? "inline-block" : "none",
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} color="#c7c7c7" />
          </span>
        </div>
        <div
          className="button-container"
          onClick={() => handleClick(moviesResult[0])}
        >
          <Button msg={"Add to unwatched"} />
        </div>
      </div>
      <ul style={{ display: showSearchUl ? "block" : "none" }}>
        {inputApiSearch.length > 0
          ? moviesResult.length
            ? moviesResult.map((movie) => {
                // console.log(movie);
                return (
                  <SearchDetail
                    movie={movie}
                    title={movie.title}
                    movieImg={movie.poster_path}
                    year={movie.release_date}
                    onClick={(movie) => handleClick(movie)}
                  />
                );
              })
            : ""
          : ""}
      </ul>
    </div>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => Searcher.handleClickOutside,
};

export default onClickOutside(Searcher, clickOutsideConfig);
