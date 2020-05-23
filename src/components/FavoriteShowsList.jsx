import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './FavoriteShowsList.scss';

function FavoriteShowsList() {
  const favoriteShows = useSelector(state => state.favoriteShows.shows).map(
    show => (
      <li key={show.id} className='favorite-shows-list__item'>
        <Link to={`/favorite-shows/${show.id}`}>
          <img src={show.image.medium} alt={show.name} />
        </Link>
      </li>
    )
  );

  return <ul className='favorite-shows-list'>{favoriteShows}</ul>;
}

export default FavoriteShowsList;
