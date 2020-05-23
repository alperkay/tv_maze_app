import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFavoriteShows } from "./actions/getFavoriteShowsAction";

function App() {
  const favoriteShows = useSelector((state) => state.favoriteShows.list);
  const favoriteShow = useSelector(
    (state) => state.favoriteShows.shows[0] && state.favoriteShows.shows[2].name
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteShows(favoriteShows));
  }, [dispatch, favoriteShows]);

  return (
    <div className="App">
      <h1>{favoriteShow}</h1>
    </div>
  );
}

export default App;
