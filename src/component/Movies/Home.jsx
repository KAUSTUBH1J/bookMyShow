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
        <div className='d-flex justify-content-center mt-3'>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" />
        </div>
    </>
  )
}
