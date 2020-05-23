import React from 'react';
import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavoriteShows } from './actions/getFavoriteShowsAction';

import FavoriteShowsList from './components/FavoriteShowsList';
import Header from './components/Header';

function App() {
  const favoriteShows = useSelector(state => state.favoriteShows.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteShows(favoriteShows));
  }, [dispatch, favoriteShows]);

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <FavoriteShowsList />
      </main>
    </div>
  );
}

export default App;
