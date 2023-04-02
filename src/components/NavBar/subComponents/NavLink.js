import React from 'react';
import './NavLink.css'


function NavLink ({ currentPage, handlePageChange }) {
  return (
    <>
  <ul >

    <li>
      <a href="#about" onClick={() => handlePageChange('About')} className='nav-link' id="nav1" >About</a>
    </li>

    <li>
      <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className='nav-link' id="nav2">Portfolio</a>
    </li>

  </ul>
  </>
  )
}

  export default NavLink