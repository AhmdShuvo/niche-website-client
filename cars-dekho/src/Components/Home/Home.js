import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Header/Banner/Banner';
import Car from './Car/Car';
import Review from './Review/Review';

const Home = () => {

    const [cars,setCars]=useState([])

    useEffect(()=>{
        fetch("http://localhost:9000/cars").then(res=>res.json()).then(data=>setCars(data.slice(0,6)))

    },[])
    return (
<>
        <Banner></Banner>
        <Container>
           
            <h1>top Cars</h1>

            {/* Cars Available  */}

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

                   
                   {/* USer Reiview  */}
            <Review></Review>
        </Container>
        </>

    );
};

export default Home;