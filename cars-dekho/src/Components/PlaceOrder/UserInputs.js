import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const UserInputs = () => {

    const {user}=useAuth()
    return (
        <div className="my-5">
              <Container>
                <h4>Please Provide some Information</h4>

                <div>
                    <label>User Name</label>
                <Form.Control  name="name" type="text" placeholder="username" defaultValue={user.displayName} />
                     <br />
                    <label>User Email</label>
                <Form.Control name="email" type="email" placeholder="email" defaultValue={user.email}  />
                     <br />
                    <label> Address </label>
                <Form.Control name="address" type="text" placeholder="User Address"  />
                     <br />
                    <label>Phone Number</label>
                <Form.Control name="phone" type="Number" placeholder="Phone" />
                     <br />
                      <center><Button className="btn-warning text-light p-3 fs-5 border rounded-3">Place Order</Button></center>
                </div>
              </Container>
        </div>
    );
};

export default UserInputs;