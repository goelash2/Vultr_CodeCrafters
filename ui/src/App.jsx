import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import BasicNavbar from './components/nav';
import Home from './pages/home';
// import About from './pages/about';
// import Contact from './pages/contact';

import Feature from './components/features';
import Footer from './components/footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')  // Adjust the URL to your Laravel API route
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <>
    <Router>
      <BasicNavbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    <Home/>
    <Feature/>
    <Footer/>
    </>
  )
}

export default App
