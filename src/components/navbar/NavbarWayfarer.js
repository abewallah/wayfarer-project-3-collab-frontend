import React from 'react';

const NavbarWayfarer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/wayfarer">Wayfarer</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
        </ul>
        <div id="searchBar" className="d-flex"> 
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default NavbarWayfarer;