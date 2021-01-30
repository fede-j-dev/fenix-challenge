import React from "react";
import { DataProvider } from "./GlobalState";
import Searcher from "./components/Searcher/Searcher";
import MyMovies from "./components/MyMovies/MyMovies";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Searcher />
        <MyMovies />
      </DataProvider>
    </div>
  );
}

export default App;
