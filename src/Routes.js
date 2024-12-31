// Routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Movies/Home';
import NotFound from './component/Templates/NotFound';
import Movies from './component/Movies/Movies';
import SelectShow from './component/Movies/SelectShow';
import Dashboard from './AdminMaster/Components/Dashboard/Dashboard';
import Table  from './AdminMaster/Components/Tables/Index';
import AddMovie from './AdminMaster/Components/Tables/AddMovie'

const AppRoutes = () => {

  const AdminRoute = ({ children }) => {
    let encodedData = localStorage.getItem('encodedData');
    if(encodedData){
      const decodedData = JSON.parse(atob(encodedData));
      
      return decodedData.user_type === 'admin' ? children : <Navigate to="/" replace />;
    }
    return <Navigate to="/" replace />;
  };



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/SelectShow" element={<SelectShow />} />
      <Route path="*" element={<NotFound />} />
      
      <Route path="/Admin/Dashboard" element={ <AdminRoute><Dashboard /></AdminRoute>} />
      <Route path="/Admin/movies" element={<AdminRoute><Table /></AdminRoute>} />
      <Route path="/Admin/movies/AddMovie" element={<AdminRoute><AddMovie /></AdminRoute>} />
    </Routes>
  );
};

export default AppRoutes;