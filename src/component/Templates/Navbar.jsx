import React, { useEffect, useState } from 'react';
import Login from './LoginPopUp';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RemoveDetails } from '../../Store/Login/login';
import { ShowProfilePopUp } from '../../Store/Settings/setting';
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { IsLogin,UserDetails } = useSelector((state) => state.Login);
  const dispatch = useDispatch();
  
  const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('encodedData');
    dispatch(RemoveDetails());
  }

  const handleShowProfile = ()=>{
    console.log('helloo');
    dispatch(ShowProfilePopUp());
  }
  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
        <div className="container-fluid">
          {/* Logo or Brand */}
          <a className="navbar-brand" href="#">
            { isLoggedIn ? 'Dashboard' : 'BookMyShow' }
          </a>

          {/* Toggle Button for Offcanvas */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Content */}
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                {isLoggedIn ? 'Menu' : 'Welcome!'}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {IsLogin ? (
                  <>
                    <li  className="nav-item ">

                      {UserDetails.user_type == 'admin'?<Link className="nav-link" to="/Admin/Dashboard">Dashborad</Link>:''} 
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Movies
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Comedy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Drama
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://via.placeholder.com/30"
                          alt="Profile"
                          className="rounded-circle me-2"
                          style={{ width: "30px", height: "30px" }}
                        />
                        {UserDetails.email}
                      </a>
                      <ul className="dropdown-menu">
                        <li className='cursor-pointer'>
                          <button className="dropdown-item " onClick={()=>{handleShowProfile()}} >
                            View Profile
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => logout()}>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>

                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      {
                        !IsLogin?<Login/>:'user'
                      }
                      
                    </li>
                    
                  </>
                )}
              </ul>

              {/* Search Form */}
              {isLoggedIn && (
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search movies..." aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
