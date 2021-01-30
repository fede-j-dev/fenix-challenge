import React, { useState } from "react";

function MyMoviesFilter(props) {
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (e) => {
    setInputSearch(e.target.value);
    props.inputValue(e.target.value);
  };
  return (
    <div>
      <div className="myMoviesSearcher">
        <input type="text" placeholder="Find a movie" onChange={handleChange} />
      </div>
    </div>
  );
}

export default MyMoviesFilter;
