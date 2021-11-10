import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';

const Header = () => {

  console.log(useAuth());

    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Cars Dekho </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/home">Home</NavLink>
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Explore">explore</NavLink>
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Login</NavLink>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;