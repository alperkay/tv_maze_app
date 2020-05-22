import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getShow } from "./actions/getShowAction";

function App() {
  const favoriteShows = useSelector((state) => state.favoriteShows.list);
  const name = useSelector((state) => state.selectedShow.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShow(favoriteShows[0]));
  }, [dispatch, favoriteShows]);

  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
}

export default App;
