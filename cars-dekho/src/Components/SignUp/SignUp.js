import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';

const SignUp = () => {



    const handleSignup=e=>{


        e.preventDefault()
    }
    return (
        <Container>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSignup}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      Enter Your Name here.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className="border rounded-3 p-3 fs-5 btn-warning text-white"  type="submit">
   Sign Up
  </Button>
</Form>
        </Container>
    );
};

export default SignUp;