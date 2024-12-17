import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './component/Templates/Navbar';
import Login from './component/Templates/LoginPopUp';
import MoviePopUp from './component/Templates/MoviePopUp';
import Sidebar from './AdminMaster/Templates/SideBar/Sidebar';

const App = () => {
  localStorage.setItem('role', 'admin');  
  const userRole = localStorage.getItem('role') || 'user'; 
  // console.log()
  return (
    <>
    <div className=''>
      {userRole == 'user' ?<Navbar/>:<Sidebar/>}
      <Route>
        <AppRoutes/>
      </Route>
      {/* <Login/>
      <MoviePopUp/> */}
    </div>
    </>
  );
};

export default App;
