import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconsBookMyShow from '../../Icons/nameOfBookMyShow.png';
import CSSLoader from '../../../Function/CssLoader';
import { useSelector, useDispatch } from 'react-redux';
import { ShowSideBar } from '../../../Store/Setting/Setting';

const Sidebar = () => {
  CSSLoader('Assets/CSS/AdminMaster/soft-ui-dashboard.css');

  const menuItems = [
    { label: 'Dashboard', icon: 'tachometer', path: '/Admin/dashboard' },
    { label: 'Movies Master', icon: 'film', path: '/Admin/movies' },
    { label: 'Billing', icon: 'file-invoice-dollar', path: '/Admin/billing' },
    { label: 'Virtual Reality', icon: 'vr-cardboard', path: '/admin/vr' },
    { label: 'Profile', icon: 'user-circle', path: '/profile' },
    { label: 'Sign In', icon: 'sign-in-alt', path: '/sign-in' },
    { label: 'Sign Up', icon: 'user-plus', path: '/sign-up' },
  ];

  const dispatch = useDispatch();
  const { Sidebar } = useSelector((state) => state.Setting);
  const [classNameAsideBar, setClassNameSideBar] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1200;
      dispatch(ShowSideBar(isMobile));

      setClassNameSideBar(
        isMobile
          ? 'sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y bg-white d-none'
          : 'sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y'
      );
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [Sidebar, dispatch]);

  return (
    <aside className={classNameAsideBar} id="sidenav-main">
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <Link to="/" className="navbar-brand m-0">
          <img src={IconsBookMyShow} className="navbar-brand-img h-100" alt="Book My Show Logo"/>
        </Link>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link to={item.path} className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className={`fa fa-${item.icon} me-sm-1 fs-5`}></i>
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
