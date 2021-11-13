import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Product from './Product';
const ManageProducts = () => {
    const [cars,setCars]=useState([])

    useEffect(()=>{
        fetch("https://enigmatic-escarpment-30976.herokuapp.com/cars").then(res=>res.json()).then(data=>setCars(data))

    },[])

    return (
        <Container>
           <h1>manage product</h1> 

           {
            cars.length? <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    cars.map(car=><Product
                    key={car._id}
                    car={car}
                    ></Product>)
                }

            </Row>
            </Container>: <center><img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Girl in a jacket"/></center>
        }
        </Container>
    );
};

export default ManageProducts;