import { faCcPaypal, faDashcube, faFirstOrderAlt } from '@fortawesome/free-brands-svg-icons';
import { faAd, faMagic, faPlus, faSignOutAlt, faStreetView, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas, Spinner } from 'react-bootstrap';
import { NavLink,useRouteMatch,Switch,Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import AddNewCar from './AddNewCar/AddNewCar';
import AddReview from './AddReview/AddReview';
import DashboardHome from './DashBoardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrder from './Manage Orders/ManageOrder';
import ManageProducts from './Manage Products/ManageProducts';
import Myorders from './MyOrder/Myorders';

const Dashboard = () => {
  const dashboardIcon = <FontAwesomeIcon icon={faDashcube} />
  const adminIcon = <FontAwesomeIcon icon={faUserCog} />
  const  addIcon = <FontAwesomeIcon icon={faPlus} />
  const  LogoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
  const  manageIcon = <FontAwesomeIcon icon={faMagic} />
  const  reviewIcon = <FontAwesomeIcon icon={faStreetView} />
  const  orderIcon = <FontAwesomeIcon icon={faFirstOrderAlt} />
  const  paymentIcon = <FontAwesomeIcon icon={faCcPaypal} />

  const {user,LogOUt,admin}=useAuth()
             
  const [CurrentUser,setuser]=useState({})
  let { path, url } = useRouteMatch();

  useEffect(()=>{ 
     fetch("https://enigmatic-escarpment-30976.herokuapp.com/users").then(res=>res.json()).then(data=>{

     const match=data.find(us=>us.email===user.email)
     setuser(match);
     })
     

  },[user])
   if(!CurrentUser){

    return  <center><Spinner style={{color:"red",fontSize:"8000px"}} animation="grow" /></center>
   }

    return (

      <>
        <Navbar bg="light" expand={false}>
  <Container fluid>
  <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Brand href="/dashboard"> {dashboardIcon} Dash Board</Navbar.Brand>
    
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
          { !CurrentUser.role && <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/addreview`}>{reviewIcon}  review</NavLink>}
          {!CurrentUser.role && <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 "  to={`${url}/order/${user.email}`}>{orderIcon}  My Orders</NavLink>}
         {!CurrentUser.role && <NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 "  to={`${url}/payment`}>{paymentIcon}  pay Now </NavLink>}
          {CurrentUser.role==="admin" &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/makeAdmin`}> {adminIcon} make Admin</NavLink>}
          {CurrentUser.role==="admin" &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/add`}>{addIcon}  add New car </NavLink>}
          {CurrentUser.role==="admin" &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/manage`}>{manageIcon}  Manage Orders </NavLink>}
          {CurrentUser.role==="admin" &&<NavLink  className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to={`${url}/products`}>{manageIcon}  Manage products </NavLink>}
          {user.email?<NavLink onClick={LogOUt} className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login"> {LogoutIcon} Logout</NavLink>:<NavLink className="navbar-brand text-light border border-secondary p-2 rounded-3 m-2 " to="/Login">Login</NavLink>}
                     

          
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>


                       <Container>
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
        <AdminRoute path ={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <AdminRoute path={`${path}/add`}>
          <AddNewCar></AddNewCar>
        </AdminRoute>
        <AdminRoute path={`${path}/manage`}>
          <ManageOrder></ManageOrder>
        </AdminRoute>
        <AdminRoute path={`${path}/products`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>


                       </Container>
</>
    );
};

export default Dashboard;