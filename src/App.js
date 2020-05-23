import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteShows } from './actions/getFavoriteShowsAction';

import Header from './components/Header';
import FavoriteShowsList from './components/FavoriteShowsList';
import ShowDetails from './components/ShowDetails';

import './App.scss';

function App() {
  const favoriteShows = useSelector(state => state.favoriteShows.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteShows(favoriteShows));
  }, [dispatch, favoriteShows]);

  return (
    <Router>
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>
          <Route exact path='/' component={FavoriteShowsList} />
          <Route exact path='/favorite-shows/:id' component={ShowDetails} />
        </main>
      </div>
    </Router>
  );
}

export default App;
