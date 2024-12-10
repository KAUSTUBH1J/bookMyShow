// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Movies/Home';
import NotFound from './component/Template/NotFound';
import Movies from './component/Movies/Movies';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;