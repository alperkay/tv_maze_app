import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { SELECT_SHOW } from '../actions/actionTypes';
import { getEpisodes } from '../actions/getEpisodesAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import '../styles/ShowDetails.scss';

function ShowDetails() {
  const [tab, setTab] = useState('info');
  const [selectedSeason, setSelectedSeason] = useState(1);

  const { id } = useParams();
  const selectedShow = useSelector(state =>
    state.favoriteShows.shows.find(show => show.id.toString() === id)
  );

  const groupedBySeason = useSelector(state => {
    const { episodes } = state.selectedShow;
    let groupedBySeason;
    if (episodes.length > 0) {
      const numberOfSeasons = episodes[episodes.length - 1].season;
      groupedBySeason = Array.from({ length: numberOfSeasons }, (v, i) => {
        return { season: i + 1, episodes: [] };
      });
      state.selectedShow.episodes.forEach(episode => {
        const matchingSeason = groupedBySeason.find(
          s => s.season === episode.season
        );
        matchingSeason && matchingSeason.episodes.push(episode);
      });
    }
    return groupedBySeason;
  });

  console.log(groupedBySeason);

  const seasonSelector = () => {
    return (
      <select
        name='seasons'
        onChange={e => setSelectedSeason(e.target.value)}
        value={selectedSeason}
        className='show-details__season-selector'
      >
        {groupedBySeason &&
          groupedBySeason.map(s => (
            <option key={s.season} value={s.season}>
              Season {s.season}
            </option>
          ))}
      </select>
    );
  };

  const episodeList = () => {
    return (
      <ul className='show-details__episode-list'>
        {groupedBySeason &&
          groupedBySeason[selectedSeason - 1].episodes.map(episode => (
            <Link
              key={episode.name}
              to={`/favorite-shows/${id}/episodes/${episode.id}`}
            >
              <li className='show-details__episode-list__item'>
                <img
                  className='show-details__episode-list__item__image'
                  src={episode.image.medium}
                  alt={episode.name}
                />
                <span className='show-details__episode-list__item__number'>
                  {episode.number}.
                </span>
                <p>{episode.name}</p>
              </li>
            </Link>
          ))}
      </ul>
    );
  };
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
      <div className='show-details'>
        <img
          className='show-details__image'
          src={selectedShow.image.medium}
          alt={selectedShow.name}
        />
        <h4 className='show-details__title'>{selectedShow.name}</h4>
        <button className='show-details__play-button'>
          <FontAwesomeIcon icon={faPlay} />
          <span className='show-details__play-button__text'>Watch now</span>
        </button>
        <ul className='show-details__navigation'>
          <li
            onClick={() => setTab('info')}
            className={`show-details__navigation__item ${
              tab === 'info' ? 'selected' : ''
            }`}
          >
            <h5>Quick Info</h5>
          </li>
          <li
            onClick={() => setTab('episodes')}
            className={`show-details__navigation__item ${
              tab === 'episodes' ? 'selected' : ''
            }`}
          >
            <h5>Episodes</h5>
          </li>
          <li
            onClick={() => setTab('cast')}
            className={`show-details__navigation__item ${
              tab === 'cast' ? 'selected' : ''
            }`}
          >
            <h5>Cast</h5>
          </li>
        </ul>

        {tab === 'info' && (
          <div
            className='show-details__info'
            dangerouslySetInnerHTML={createSummaryMarkup()}
          ></div>
        )}
        {tab === 'episodes' && seasonSelector()}
        {tab === 'episodes' && episodeList()}
        {tab === 'cast' && <p>not implemented</p>}
      </div>
    );
  }
  return null;
}

export default ShowDetails;
