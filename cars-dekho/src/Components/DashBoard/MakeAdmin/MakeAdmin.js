import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const MakeAdmin = () => {

  const [email,setEmail]=useState('');


  const handleChange=e=>{
    setEmail(e.target.value)
  }

  const handleAdmin=e=>{

    const user={email,}

          
                              
        fetch('http://localhost:9000/users',{
          method:'PUT',
          headers:{ "content-type": 'application/json'},
                 body:JSON.stringify(user)
      
        }).then(res=>res.json()).then(data=>console.log(data))

    e.preventDefault()
  }
    return (
      <Container className="my-5">
             <Form onSubmit={handleAdmin}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     Type An email to make admin
    </Form.Text>
  </Form.Group>
  <Button className="btn-warning text-light fs-4 px-2 border rounded-3" type="submit">
  Make Admin
  </Button>
             </Form>
      </Container>
    );
};

export default MakeAdmin;