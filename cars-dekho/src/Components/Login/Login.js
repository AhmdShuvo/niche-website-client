
import React, { useState } from 'react';
import { Form ,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

  
  const {Login,setIsLoadng,GoogleLogin,saveGoogleUsertoDb}=useAuth()

 const [logInData,setData]=useState({})

 const location=useLocation()
 const history=useHistory()
 const url=location.state?.from.location.pathname||"/home"


 const handleGoogle=()=>{
   GoogleLogin().then(result=>{
    saveGoogleUsertoDb(result.user.email,result.user.displayName)
    history.replace(url)
   });
 }
    

  const handleChange=e=>{
   const field= e.target.name
   const value=e.target.value
const newLogindata={...logInData}
newLogindata[field]=value;
setData(newLogindata)
  }

  const handleLogin=e=>{
    e.preventDefault()
    
          Login(logInData.email,logInData.password).then((userCredential) => {
            // Signed in 
            
            const user = userCredential.user;
            history.replace(url)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          }).finally(()=>{
            setIsLoadng(false);
          });
          


   
  }
    return (
      <>
       <Container>
            <h1>Login</h1>
            <Form onSubmit={handleLogin}>
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      Enter Your Name here.
    </Form.Text>
  </Form.Group> */}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
  </Form.Group>
  <Button className="border rounded-3 p-3 fs-5" variant="primary" type="submit">
    Log In
  </Button>
</Form>
         <center> <Link style={{color:'salmon'}} className="navbar-brand" to="/signup">New User ? SignUp Now</Link></center>
       </Container>


        <center><Button onClick={handleGoogle}><img style={{marginLeft:"-10%"}} src="./image/Icons/Google Icon.png" alt="Google icon" width="10%"/> GoogleSignIn</Button></center>
       </>
    );
};

export default Login;