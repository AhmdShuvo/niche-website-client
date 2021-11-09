import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../Home/Car/Car';

const Services = () => {
    const [cars,setCars]=useState([])

    useEffect(()=>{
        fetch("https://enigmatic-escarpment-30976.herokuapp.com/cars").then(res=>res.json()).then(data=>setCars(data))

    },[])
    return (
        <div>
            <h1>services</h1>
            <Container>
            <Row xs={1} md={3} className="g-3">
                {
                    cars.map(car=><Car
                    key={car._id}
                    car={car}
                    ></Car>)
                }

            </Row>
            </Container>
        </div>
    );
};

export default Services;