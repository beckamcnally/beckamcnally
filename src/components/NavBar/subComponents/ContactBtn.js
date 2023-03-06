import React from 'react';
import './ContactBtn.css'


function ContactBtn ({ currentPage, handlePageChange }) {
  return (
<a  href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} id='contactBtn'>Contact</a>
  )
}

export default ContactBtn