import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconsBookMyShow from '../../Icons/nameOfBookMyShow.png';
// import '../../Style/soft-ui-dashboard.css'; // Static import
import CSSLoader from '../../../Function/CssLoader';
const Sidebar = () => {
  CSSLoader('Assets/CSS/AdminMaster/soft-ui-dashboard.css');
  const menuItems = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      path: '/Admin/dashboard',
    },
    {
      label: 'Movies Master',
      icon: 'movies',
      path: '/Admin/movies',
    },
    {
      label: 'Billing',
      icon: 'billing',
      path: '/Admin/billing',
    },
    {
      label: 'Virtual Reality',
      icon: 'vr',
      path: '/admin/vr',
    },
    {
      label: 'Profile',
      icon: 'profile',
      path: '/profile',
    },
    {
      label: 'Sign In',
      icon: 'sign-in',
      path: '/sign-in',
    },
    {
      label: 'Sign Up',
      icon: 'sign-up',
      path: '/sign-up',
    },
  ];

  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-main">
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a className="navbar-brand m-0" href="https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html" target="_blank" rel="noopener noreferrer">
          <img src={IconsBookMyShow} className="navbar-brand-img h-100" alt="main_logo" />
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link to={item.path} className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  {/* Replace with actual SVG icons for each item */}
                  <svg width="12px" height="12px" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF">
                    <circle cx="6" cy="6" r="5" />
                  </svg>
                </div>
                <span className="nav-link-text ms-1">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
