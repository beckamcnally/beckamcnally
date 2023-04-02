import React from 'react';
import Header from './subComponents/Header';
import NavLink from './subComponents/NavLink';
import ContactBtn from './subComponents/ContactBtn';
import './NavBar.css'


function NavBar ({ currentPage, handlePageChange }) {
  return (
<nav id="nav" className='nav container-fluid'>
<NavLink currentPage={currentPage} handlePageChange={handlePageChange} />
<Header/>
<ContactBtn currentPage={currentPage} handlePageChange={handlePageChange} />
</nav> 
  )
}

export default NavBar;