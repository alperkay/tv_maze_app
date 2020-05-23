import React from 'react';
import { useSelector } from 'react-redux';

import './FavoriteShowsList.scss';

function FavoriteShowsList() {
  const favoriteShows = useSelector(state => state.favoriteShows.shows).map(
    show => (
      <li class='favorite-shows-list__item'>
        <img src={show.image.medium} alt={show.name} />
      </li>
    )
  );

  return <ul class='favorite-shows-list'>{favoriteShows}</ul>;
}

export default FavoriteShowsList;
