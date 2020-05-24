import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import '../styles/Header.scss';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const location = useLocation();
  const history = useHistory();

  const [page, setPage] = useState('home');

  const selectedShow = useSelector(state =>
    state.favoriteShows.shows.find(
      show => show.id.toString() === state.selectedShow.id
    )
  );

  useEffect(() => {
    if (location.pathname.includes('episodes')) {
      setPage('episodes');
    } else if (location.pathname.includes('favorite-shows/')) {
      setPage('shows');
    } else if (location.pathname === '/') {
      setPage('home');
    }
  }, [location]);

  function goBack() {
    switch (page) {
      case 'episodes':
        history.push(`/favorite-shows/${selectedShow.id}`);
        break;
      case 'shows':
        history.push('/');
        break;
      default:
        break;
    }
  }

  return (
    <div className='header'>
      <div className='header__title'>
        {!['home', 'favorite-shows'].includes(page) && (
          <FontAwesomeIcon
            className='header__title__icon'
            icon={faChevronLeft}
          />
        )}
        {page === 'episodes' && selectedShow && (
          <h4 onClick={goBack}>{selectedShow.name}</h4>
        )}
        {page !== 'episodes' && <h4 onClick={goBack}>Your Favorites</h4>}
      </div>
      <div className='header__logo'>
        <Link to='/'>
          <h4>A-maze</h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
