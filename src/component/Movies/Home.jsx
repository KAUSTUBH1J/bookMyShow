import React from 'react';
import Banner from '../Templates/Banner';
import MovieList from '../Templates/MovieList';
import Navbar from '../Templates/Navbar';


export default function Home() {
  return (
    <>
        <Navbar/>
        <Banner />
        <MovieList />
    </>
  )
}
