import React, { useState ,useEffect } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import AppRoutes from './Routes';
import { useDispatch } from 'react-redux';
import { SetDetails } from './Store/Login/login';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    let encodedData = localStorage.getItem('encodedData');
    if(encodedData){
      const decodedData = JSON.parse(atob(encodedData));
  
      dispatch(SetDetails(decodedData));
    }
  },[]);

  return (
    <>
      <Route>
        <AppRoutes/>
      </Route>
    </>
  );
};

export default App;
