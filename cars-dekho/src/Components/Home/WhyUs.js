import React from 'react';
import { Container } from 'react-bootstrap';
import "./Whyus.css"

const WhyUs = () => {
    return (
       <div className="d-lg-flex  my-5 align-items-center bg-color p-3">
           <Container className="mx-5 container-fluid "style={{width:"80%" }} >
               <img className="img-fluid" src="./image/rent-car.png" alt="" />
           </Container>
           <div>
               <h4 className="fs-1 text-dark p-3 ">Most reliable website to get a car </h4>
              <div className="d-flex">
              <div className="border border-secondary rounded-3 m-5 p-2">
                    <h4>more then 16 services and card </h4>
                   </div>                   
               <div  className="border border-secondary rounded-3 m-5 p-3">
                    <h4>200+ users </h4>
                   </div>  
                   </div>                 
           </div>
       </div>
    );
};

export default WhyUs;