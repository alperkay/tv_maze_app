import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/EpisodeDetails.scss';

function EpisodeDetails() {
  const { episodeId } = useParams();

  const selectedEpisode = useSelector(state =>
    state.selectedShow.episodes.find(
      episode => episode.id.toString() === episodeId
    )
  );

  function createSummaryMarkup() {
    return { __html: selectedEpisode.summary };
  }

  if (selectedEpisode) {
    return (
      <div className='episode-details'>
        <h4 className='episode-details__title'>{selectedEpisode.name}</h4>
        <h5 className='episode-details__info'>
          Season {selectedEpisode.season} Episode {selectedEpisode.number}
        </h5>
        <img
          className='episode-details__image'
          src={selectedEpisode.image.medium}
          alt={selectedEpisode.name}
        />
        <div
          className='episode-details__content'
          dangerouslySetInnerHTML={createSummaryMarkup()}
        ></div>
      </div>
    );
  }
  return null;
}

export default EpisodeDetails;
