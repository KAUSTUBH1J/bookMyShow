import React, { useState ,useEffect } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import AppRoutes from './Routes';
import { useDispatch } from 'react-redux';
import { SetDetails } from './Store/Login/login';
import Notifications from './Function/Notifications';
import {GetUserDetails} from './Function/ApiFunction';
const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    let encodedData = localStorage.getItem('encodedData');
    
    if(encodedData){
      const decodedData = JSON.parse(atob(encodedData));
      fetchUserDetails(decodedData.user_id);
      }
  },[]);

  const fetchUserDetails = async (id) => {
    try {
      const userDetail = await GetUserDetails(id); // Await the result
      console.log('Fetched User Detail:', userDetail);
      dispatch(SetDetails(userDetail));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <>
      <Route>
        <AppRoutes/>
      </Route>
    </>
  );
};

export default App;
