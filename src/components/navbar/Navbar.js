import React from 'react';
import Icon from '../../images/icon.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark navbar-custom fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/wayfarer'>
          Wayfarer
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
