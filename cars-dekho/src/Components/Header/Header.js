import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const UserIcon = <FontAwesomeIcon icon={faUser} />
  const HomeIcon = <FontAwesomeIcon icon={faHome} />
  const dashBoardIcon = <FontAwesomeIcon icon={faDashcube} />
  const logOUtIcon = <FontAwesomeIcon icon={faSignOutAlt} />
  const logInIcon = <FontAwesomeIcon icon={faSignInAlt} />

  const {user,LogOUt}=useAuth()


    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home"> {HomeIcon}  Cars Dekho </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/home"> {HomeIcon}  Home</NavLink>
      {user.email &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/dashboard"> {dashBoardIcon} DashBoard</NavLink>}
      <NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Explore">explore</NavLink>
      {user.email?<NavLink onClick={LogOUt} className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">{logOUtIcon}  Logout</NavLink>:<NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">{logInIcon}  Login</NavLink>}
      
    
     
    </Nav>
    {user.displayName && <h1 className="text-light">{UserIcon}    {user.displayName}</h1>}
  </Navbar.Collapse>
 
  </Container>
  
</Navbar>
        </div>
    );
};

export default Header;