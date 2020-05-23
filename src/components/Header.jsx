import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <h4 className='header__logo'>videoland</h4>
      </Link>
      <h4 className='header__title'>Your Favorite Shows</h4>
    </div>
  );
}

export default Header;
