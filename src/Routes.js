// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Movies/Home';
import NotFound from './component/Template/NotFound';
import Movies from './component/Movies/Movies';
import SelectShow from './component/Movies/SelectShow';
import Dashboard from './AdminMaster/Components/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/SelectShow" element={<SelectShow />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/Admin/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;