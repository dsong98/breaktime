import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {  Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">Break Time</Navbar.Brand>
         <Nav className="mr-auto"/>
        <Nav>
           <Nav.Link>About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;