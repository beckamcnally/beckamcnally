import React from 'react';
import './NavLink.css'


function NavLink ({ currentPage, handlePageChange }) {
  return (
    <>
  <ul class="">
    <li>
      <a href="#Home"  class="" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
    </li>

    <li>
      <a href="#about" class="" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >About</a>
    </li>

    <li>
      <a href="#portfolio" class="" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >Portfolio</a>
      </li>

  </ul>
  </>
  )
}

  export default NavLink