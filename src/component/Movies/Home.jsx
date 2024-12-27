import React, { useEffect,useRef } from 'react';
import Banner from '../Templates/Banner';
import MovieList from '../Templates/MovieList';
import Navbar from '../Templates/Navbar';
import UserProfile from '../Templates/UserProfile';
import { useSelector } from 'react-redux';
import Notifications from '../../Function/Notifications';

export default function Home() {
  
  const {IsLogin} = useSelector((state)=>state.Login);
  const notificationRef = useRef(null);
  
  useEffect(()=>{
    if (notificationRef.current) {
      notificationRef.current('success', 'This is a programmatically triggered notification!');
    }
  })
  
  return (
    <>
      <Navbar/>
      {IsLogin?<UserProfile/>:''}
      <Banner />
      <MovieList />
      <div className='d-flex justify-content-center mt-3'>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" />
      </div>
      <Notifications addNotification={(fn) => (notificationRef.current = fn)} />
    </>
  )
}
