import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Episodes from './components/Episodes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <SiteHeader />

      <div className="content">
        <SearchBar />

        <Switch>
          <Route exact path="/search/:text" component={SearchResults} />
          <Route exact path="/show/:showId/episodes" component={Episodes} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
