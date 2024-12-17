import React, { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
        <div className="container-fluid">
          {/* Logo or Brand */}
          <a className="navbar-brand" href="#">
            {isLoggedIn ? 'Dashboard' : 'BookMyShow'}
          </a>

          {/* Toggle Button for Offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
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
                {isLoggedIn ? (
                  <>
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
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        FAQ
                      </a>
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
                      <a
                        className="nav-link"
                        onClick={() => {
                          setIsLoggedIn(true);
                        }}
                      >
                        Login
                      </a>
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
      <div style={{ 'width': '100%', 'height': '40px'}}>

      </div>
    </>
    

);
};

export default Navbar;