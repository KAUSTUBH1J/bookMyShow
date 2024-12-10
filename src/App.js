import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './component/Template/Navbar';
import Login from './component/Template/LoginPopUp';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Route>
        <AppRoutes/>
      </Route>
      <Login/>
    </div>
  );
};

export default App;
