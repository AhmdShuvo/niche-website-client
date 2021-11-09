import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from './Car/Car';

const Home = () => {

    const [cars,setCars]=useState([])

    useEffect(()=>{
        fetch("http://localhost:9000/cars").then(res=>res.json()).then(data=>setCars(data.slice(0,6)))

    },[])
    return (
        <Container>
            <h1>top Cars</h1>

            <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    cars.map(car=><Car
                    key={car._id}
                    car={car}
                    ></Car>)
                }

            </Row>
            </Container>
        </Container>

    );
};

export default Home;