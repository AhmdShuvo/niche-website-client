import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Login from '../Login/Login';

const SignUp = () => {

  const {register,error,setError,isLoading}=useAuth()

 const [logInData,setData]=useState({})
    

  const handleChange=e=>{
   const field= e.target.name
   const value=e.target.value
const newLogindata={...logInData}
newLogindata [field]=value;
setData(newLogindata)
console.log(logInData);


  }
    const handleSignup=e=>{
      if(logInData.password.length<=6)
      {
        setError("password must be 6 digits")

        
      }
                   
      register(logInData.email,logInData.password)

        e.preventDefault()
    }
    return (
        <Container>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSignup}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={handleChange} name="name" type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      Enter Your Name here.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    { error && <h6>{error}</h6>}
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
  <Button className="border rounded-3 p-3 fs-5 btn-warning text-white"  type="submit">
   Sign Up
  </Button>
</Form>
        </Container>
    );
};

export default SignUp;