import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './ShowDetails.scss';

function ShowDetails() {
  const { id } = useParams();
  const selectedShow = useSelector(state =>
    state.favoriteShows.shows.find(show => show.id.toString() === id)
  );
  console.log(selectedShow);

  return (
    <div className='show-details'>
      <h1>{selectedShow.name}</h1>
    </div>
  );
}

export default ShowDetails;
