import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Order from './Order';

const Myorders = () => {

    const [orders,setOrders]=useState([])

    const {email}=useParams()

      useEffect(()=>{


      fetch(`https://enigmatic-escarpment-30976.herokuapp.com/order/${email}`).then(res=>res.json()).then(data=>setOrders(data))

      },[email])

      if(!orders){
           return "loading"

      }

        //  const {name}=orders.purchase

    return (

        
        <Container className="my-5">
            <Row xs={1} md={2} className="g-4">
           {
               orders.map(order=><Order
               key={order._id}
               order={order}
               ></Order>)
           }
           </Row>
        </Container>
    );
};

export default Myorders;