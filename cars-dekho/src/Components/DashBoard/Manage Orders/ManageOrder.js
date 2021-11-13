import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Order from './Order';

const ManageOrder = () => {

    const [orders,setOrders]=useState([])

            useEffect(()=>{
                fetch("https://enigmatic-escarpment-30976.herokuapp.com/orders").then(res=>res.json()).then(data=>setOrders(data))
            },[])
    return (
        <Container className="my-5">  

                  <h3>Manage All Orders</h3>  
                 {
                     orders.map(order=><Order
                     
                     key={order._id}
                     order={order}
                     ></Order>)
                 }
        </Container>
    );
};

export default ManageOrder;