import React from 'react';
import Banner from './component/template/Banner';
import MovieList from './component/template/MovieList';
import Navbar from './component/template/Navbar';
import Login from './component/template/LoginPopUp';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <MovieList />
      <Login/>
    </div>
  );
};

export default App;
