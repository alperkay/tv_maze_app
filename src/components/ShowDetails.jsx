import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { SELECT_SHOW } from "../actions/actionTypes";
import { getEpisodes } from "../actions/getEpisodesAction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "../styles/ShowDetails.scss";

function ShowDetails() {
  const [tab, setTab] = useState("info");

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

  if (selectedShow) {
    return (
      <div className="show-details">
        <img src={selectedShow.image.medium} alt={selectedShow.name} />
        <h4>{selectedShow.name}</h4>
        <button className="show-details__play-button">
          <FontAwesomeIcon icon={faPlay} />
          Watch now
        </button>
        <ul className="show-details__navigation">
          <li
            onClick={() => setTab("info")}
            className={`show-details__navigation__item ${
              tab === "info" ? "selected" : ""
            }`}
          >
            <h5>Quick Info</h5>
          </li>
          <li
            onClick={() => setTab("episodes")}
            className={`show-details__navigation__item ${
              tab === "episodes" ? "selected" : ""
            }`}
          >
            <h5>Episodes</h5>
          </li>
          <li
            onClick={() => setTab("cast")}
            className={`show-details__navigation__item ${
              tab === "cast" ? "selected" : ""
            }`}
          >
            <h5>Cast</h5>
          </li>
        </ul>

        {tab === "info" && (
          <div
            className="show-details__info"
            dangerouslySetInnerHTML={createSummaryMarkup()}
          ></div>
        )}
        {tab === "episodes" && (
          <ul className="show-details__episode-list">{episodeList}</ul>
        )}
        {tab === "cast" && <h1>cast</h1>}
      </div>
    );
  }
  return null;
}

export default ShowDetails;
