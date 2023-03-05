import React from 'react';
import './Navigation.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './components/projects/ProjectCards';
import Contact from './pages/Contact';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';


// home 
// portfolio 
// about

function Navigation () {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
 
  return (
    <div>
    <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}

    </div>

  );
  };

  export default Navigation