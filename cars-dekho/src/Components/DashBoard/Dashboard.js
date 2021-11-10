import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Navbar bg="light" expand={false}>
  <Container fluid>
  <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Brand href="/dashboard">Dash Board</Navbar.Brand>
    
    <Navbar.Offcanvas className="bg-dark"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
      
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/make admin">make admin</NavLink>
          <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 "  to="/order/:email">My Orders</NavLink>
          <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 "  to="/payments">pay Now </NavLink>
          
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    );
};

export default Dashboard;