import React, { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import Button from "../utils/Button";

function SearchDetail(props) {
  const state = useContext(GlobalState);
  const [moviesImageUrl] = useState("https://image.tmdb.org/t/p/w185");
  return (
    <li className="search-detail-container">
      <div className="img-info">
        <img src={moviesImageUrl + props.movieImg} alt={props.title} />
        <div className="title-year">
          <p className="title">{props.title}</p>
          <p className="year">{props.year}</p>
        </div>
      </div>
      <div onClick={() => props.onClick(props.movie)}>
        <Button msg={"+"} />
      </div>
    </li>
  );
}

export default SearchDetail;
