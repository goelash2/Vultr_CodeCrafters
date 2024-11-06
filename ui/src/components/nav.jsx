import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// const Nav = () => {
//     return(
//         <div className='w-full h-[60px] bg-[#ffd966]'>
//             <nav>
//                 home
//                 about us
//                 projects dropdown!prediction,chatbot,results!
//                 team
//                 contact us
//                 acccount
//             </nav>
//         </div>
//     );
// };
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function BasicNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-[#ffd966] text-[#333333]"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">JAUNDICEPredict</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Team</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className=""> 
              <NavDropdown.Item href="#action/3.1">Prediction</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ChatBot</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Results</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Signin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;

// export default Nav;
