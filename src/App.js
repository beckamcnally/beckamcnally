import React from 'react';
import About from './pages/About';
import Portfolio from './components/projects/ProjectCards';
import Contact from './pages/Contact';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {

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
}

export default App;
