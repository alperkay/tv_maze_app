import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { SELECT_SHOW } from "../actions/actionTypes";
import { getEpisodes } from "../actions/getEpisodesAction";

import "../styles/ShowDetails.scss";

function ShowDetails() {
  const { id } = useParams();
  const selectedShow = useSelector((state) =>
    state.favoriteShows.shows.find((show) => show.id.toString() === id)
  );
  const episodeList = useSelector((state) =>
    state.selectedShow.episodes.map((episode) => (
      <li key={episode.id}>
        <Link to={`/favorite-shows/${id}/episodes/${episode.id}`}>
          {episode.name}
        </Link>
      </li>
    ))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SELECT_SHOW,
      payload: id,
    });
    dispatch(getEpisodes(id));
  }, [dispatch, id]);

  function createSummaryMarkup() {
    return { __html: selectedShow.summary };
  }

  return (
    <div className="show-details">
      <img src={selectedShow.image.medium} alt={selectedShow.name} />
      <h1>{selectedShow.name}</h1>
      <button>WATCH NOW</button>
      <div dangerouslySetInnerHTML={createSummaryMarkup()}></div>
      <h4>Episodes</h4>
      <ul className="show-details__episode-list">{episodeList}</ul>
    </div>
  );
}

export default ShowDetails;
