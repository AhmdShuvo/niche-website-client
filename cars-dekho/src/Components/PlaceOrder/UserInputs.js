import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const UserInputs = ({order}) => {
       
    const {user}=useAuth()

    const [userInfo,setInfo]=useState({})
      

        
                //    Get Values from user /// 
     const handleChange=e=>{
        const field= e.target.name
        const value=e.target.value
     const newUserInfo={...userInfo}
     newUserInfo [field]=value;
     setInfo(newUserInfo)
            
   

     }


    //  handle Order Function ///
     
     const handleOrder=e=>{

            const purchase=order;

            let userData={name:`${user.displayName}`,email:`${user.email}`,address:`${userInfo.address}`,phone:`${userInfo.phone}`}

            userData.purchase=purchase
            userData.status="pending"
                      
     //   POST REQUEST //
        fetch(`https://enigmatic-escarpment-30976.herokuapp.com/orders`,{
           method:'POST',
           headers:{ "content-type": 'application/json'},
                  body:JSON.stringify(userData)
    
         })


         alert("Order Added successfully")
        e.preventDefault()
}

    return (
        <div className="my-5">
              <Container>
                <h4>Please Provide some Information</h4>

                <div>
                <form onSubmit={handleOrder}>    <label>User Name</label>
                <Form.Control onBlur={handleChange}  name="name" type="text" placeholder="username" defaultValue={user.displayName} disabled />
                     <br />
                    <label>User Email</label>
                <Form.Control onBlur={handleChange} name="email" type="email" placeholder="email" defaultValue={user.email} disabled  />
                     <br />
                    <label> Address </label>
                <Form.Control onBlur={handleChange} name="address" type="text" placeholder="User Address"  />
                     <br />
                    <label>Phone Number</label>
                <Form.Control onBlur={handleChange} name="phone" type="Number" placeholder="Phone" />
                     <br />
                      <center><Button type="submit" className="btn-warning text-light p-3 fs-5 border rounded-3">Place Order</Button></center></form>
                </div>
              </Container>
        </div>
    );
};

export default UserInputs;