import React from 'react';
import './styles/App.css';

import StoreProvider from './store/StoreProvider'
import MoviesSearch from "./Components/MoviesSearch/MoviesSearch"
import MoviesList from "./Components/MoviesList/MoviesList"

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>Welcome to the Moviespedia. Type your favourite movie's title</h1>
        <MoviesSearch />
        <MoviesList />
      </div>
    </StoreProvider>
  );
}

export default App;
