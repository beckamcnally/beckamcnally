import React from 'react';
import './NavLink.css'


function NavLink ({ currentPage, handlePageChange }) {
  return (
    <>
  <ul>

    <li>
      <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? ' active' : 'nav-link'} >About</a>
    </li>

    <li>
      <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >Portfolio</a>
      </li>

  </ul>
  </>
  )
}

  export default NavLink