import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas, Spinner } from 'react-bootstrap';
import { NavLink,useRouteMatch,Switch,Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Payment from '../Payment/Payment';
import AddNewCar from './AddNewCar/AddNewCar';
import AddReview from './AddReview/AddReview';
import DashboardHome from './DashBoardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Myorders from './MyOrder/Myorders';

const Dashboard = () => {

  const {user,LogOUt}=useAuth()
             
  const [CurrentUser,setuser]=useState({})
  let { path, url } = useRouteMatch();

  useEffect(()=>{ 
     fetch("https://enigmatic-escarpment-30976.herokuapp.com/users").then(res=>res.json()).then(data=>{

     const match=data.find(us=>us.email===user.email)
     setuser(match);
     })
     

  },[user])
  console.log(CurrentUser);

   if(!CurrentUser){

    return  <center><Spinner style={{color:"red",fontSize:"8000px"}} animation="grow" /></center>
   }

    return (

      <>
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
          <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/addreview`}>review</NavLink>
          <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 "  to={`${url}/order/${user.email}`}>My Orders</NavLink>
          <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 "  to={`${url}/payment`}>pay Now </NavLink>
          {CurrentUser.role==="admin" &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/makeAdmin`}>make Admin</NavLink>}
          {CurrentUser.role==="admin" &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/add`}>add New car </NavLink>}
          {user.email?<NavLink onClick={LogOUt} className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Logout</NavLink>:<NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Login</NavLink>}
                     

          
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>


                       <section>
                       <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/addreview`}>
          <AddReview></AddReview>
        </Route>
        <Route path={`${path}/order/:email`}>
          <Myorders></Myorders>
        </Route>
        <Route path ={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/add`}>
          <AddNewCar></AddNewCar>
        </Route>
      </Switch>


                       </section>
</>
    );
};

export default Dashboard;