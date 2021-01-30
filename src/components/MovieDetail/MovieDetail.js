import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FadeIn from "react-fade-in";
import Button from "../utils/Button";

function MovieDetail(props) {
  const [moviesImageUrl] = useState("https://image.tmdb.org/t/p/w185");
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);

  const handleClick = () => {
    setShowMovieInfo(!showMovieInfo);
    setRotateArrow(!rotateArrow);
  };

  return (
    <FadeIn>
      <div className="movie-detail-container">
        <div
          class="title-wrapper"
          onClick={() => {
            handleClick();
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            color="#699db6"
            style={{
              transitionDuration: "0.1s",
              transform: rotateArrow ? "rotate(90deg)" : "",
            }}
          />
          <p className="title">{props.title}</p>
        </div>
        <div
          className="img-info-button-wrapper"
          style={{ display: showMovieInfo ? "flex" : "none" }}
        >
          <div className="img-info-wrapper">
            <img src={moviesImageUrl + props.movieImg} alt={props.title} />
            <div class="vote-year">
              <p className="vote">
                {" "}
                <span>IMDB Score:</span> {props.vote}
              </p>
              <p className="year">
                <span>Realease Date:</span> {props.year}
              </p>
              <p className="year">
                <span>Popularity:</span> {props.popularity}
              </p>
            </div>
          </div>
          <div className="synopsis-wrapper">
            <h2>Synopsis</h2>
            <p>{props.overview}</p>
          </div>
          {props.buttonMsg === "watched it" ? (
            <div
              className="watched-it"
              onClick={() => props.addWatched(props.movie)}
            >
              <Button msg={props.buttonMsg} />
            </div>
          ) : (
            <div
              className="watched-it"
              onClick={() => props.removeMovie(props.movie)}
            >
              <Button msg={props.buttonMsg} />
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default MovieDetail;
