import React from 'react';
import Banner from './component/template/Banner';
import MovieList from './component/template/MovieList';
import Navbar from './component/template/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <MovieList />
    </div>
  );
};

export default App;
