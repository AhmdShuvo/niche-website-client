
import React from 'react';
import { Form ,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLogin=e=>{

    e.preventDefault()
  }
    return (
       <Container>
            <h1>Login</h1>
            <Form>
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      Enter Your Name here.
    </Form.Text>
  </Form.Group> */}
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
  <Button className="border rounded-3 p-3 fs-5" variant="primary" type="submit">
    Log In
  </Button>
</Form>
         <center> <Link style={{color:'salmon'}} className="navbar-brand" to="/signup">New User ? SignUp Now</Link></center>
       </Container>
    );
};

export default Login;