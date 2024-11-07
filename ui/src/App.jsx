import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BasicNavbar from './components/nav';
import TestConnection from './components/test-connection';
import Home from './pages/home';
import Team from './pages/teams';
import CircularLayout from './pages/about';
import Feature from './components/features';
import Footer from './components/footer';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users')  // Adjust the URL to your Laravel API route
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  // References to sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <TestConnection />
      <Router>
        <BasicNavbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, teamRef }} />
        <Routes>
          {/* Define routes if needed */}
        </Routes>
      </Router>
      
      <div ref={homeRef}>
        <Home />
      </div>
      
      <div ref={aboutRef}>
        <CircularLayout />
      </div>
      <Feature />
      <div ref={teamRef}>
        <Team />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
