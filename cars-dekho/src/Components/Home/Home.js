import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Header/Banner/Banner';
import Review from '../Review/Review';
import Car from './Car/Car';


const Home = () => {

    const [cars,setCars]=useState([])

    useEffect(()=>{
        fetch("https://enigmatic-escarpment-30976.herokuapp.com/cars").then(res=>res.json()).then(data=>setCars(data.slice(0,6)))

    },[])
    return (
<>
        <Banner></Banner>
        <Container>
           
            <h1>top Cars</h1>

            {/* Cars Available  */}

            
        {
            cars.length? <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    cars.map(car=><Car
                    key={car._id}
                    car={car}
                    ></Car>)
                }

            </Row>
            </Container>: <center><img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Girl in a jacket"/></center>
        }

                   
                   {/* USer Reiview  */}
            <Review></Review>
        </Container>
        </>

    );
};

export default Home;