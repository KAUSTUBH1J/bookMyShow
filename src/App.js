import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './component/Template/Navbar';
import Login from './component/Template/LoginPopUp';
import MoviePopUp from './component/Template/MoviePopUp';

const App = () => {
  const userRole = localStorage.getItem('role') || 'customer'; 
  return (
    <>
      <Navbar/>
      <Route>
        <AppRoutes/>
      </Route>
      <Login/>
      <MoviePopUp/>
    </>
  );
};

export default App;
