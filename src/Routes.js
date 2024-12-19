// Routes.js
import React,{useState , useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Movies/Home';
import NotFound from './component/Templates/NotFound';
import Movies from './component/Movies/Movies';
import SelectShow from './component/Movies/SelectShow';
import Dashboard from './AdminMaster/Components/Dashboard/Dashboard';
import Table  from './AdminMaster/Components/Tables/Index';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const [userRole, setUserRole] = useState('user');
  const {UserDetails} = useSelector((state)=> state.Login);
  // Component to protect admin routes
  const AdminRoute = ({ children }) => {
    console.log('user type '+UserDetails.user_type);
    // Redirect to home if the user is not an admin
    return UserDetails.user_type === 'admin' ? children : <Navigate to="/" replace />;
  };

  
  useEffect(()=>{
    let role = 'user';
    let encodedData = localStorage.getItem('encodedData');
    console.log('app js useEffect');
    if (encodedData) {
      // Decode encoded data for verification (optional)
      const decodedData = JSON.parse(atob(encodedData));
      role = decodedData.role;
      console.log(' app js Decoded User Info:', decodedData);
    }
    setUserRole(role);

  },[])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/SelectShow" element={<SelectShow />} />
      <Route path="*" element={<NotFound />} />
      
      <Route path="/Admin/Dashboard" element={ <AdminRoute><Dashboard /></AdminRoute>} />
      <Route path="/Admin/movies" element={<AdminRoute><Table /></AdminRoute>} />
    </Routes>
  );
};

export default AppRoutes;