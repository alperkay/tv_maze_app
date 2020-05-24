import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "../styles/EpisodeDetails.scss";

function EpisodeDetails() {
  const { episodeId } = useParams();

  const selectedEpisode = useSelector((state) =>
    state.selectedShow.episodes.find(
      (episode) => episode.id.toString() === episodeId
    )
  );

  function createSummaryMarkup() {
    return { __html: selectedEpisode.summary };
  }

  if (selectedEpisode) {
    return (
      <div className="episode-details">
        <h1>{selectedEpisode.name}</h1>
        <img src={selectedEpisode.image.medium} alt={selectedEpisode.name} />
        <div dangerouslySetInnerHTML={createSummaryMarkup()}></div>
      </div>
    );
  }
  return null;
}

export default EpisodeDetails;