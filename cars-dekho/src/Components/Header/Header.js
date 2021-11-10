import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';

const Header = () => {

  const {user,LogOUt}=useAuth()


    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Cars Dekho </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/home">Home</NavLink>
      {user.email?<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/dashboard">DashBoard</NavLink>:<NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Login</NavLink>}
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Explore">explore</NavLink>
      {user.email?<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/review">Review</NavLink>:<NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Login</NavLink>}
      {user.email?<NavLink onClick={LogOUt} className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Logout</NavLink>:<NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Login</NavLink>}
      
    
      {user.displayName && <h1 className="text-light">{user.displayName}</h1>}
    </Nav>
  </Navbar.Collapse>
 
  </Container>
  
</Navbar>
        </div>
    );
};

export default Header;