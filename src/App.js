import React, { useState ,useEffect } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import AppRoutes from './Routes';


const App = () => {

  

  return (
    <>
      <Route>
        <AppRoutes/>
      </Route>
    </>
  );
};

export default App;
