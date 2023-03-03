import './App.css';
import Project from './components/Project';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <body>
      <Header/>
      <Navigation/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </body>
  );
}

export default App;
