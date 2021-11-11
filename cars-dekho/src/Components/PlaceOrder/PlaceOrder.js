import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import UserInputs from './UserInputs';

const PlaceOrder = () => {

    const [order,setOrder]=useState({})


    const {carId}=useParams()
      
    // Load Single Product ///
    useEffect(()=>{
        fetch("https://enigmatic-escarpment-30976.herokuapp.com/cars").then(res=>res.json()).then(data=>{


        const match=data.find(car=>car._id===carId);
        setOrder(match);

        })

    },[carId])
        
                 

        //  Spinner before Loading data ///
         if(!order){
             return <center><Spinner style={{color:"red",fontSize:"8000px"}} animation="grow" /></center>
         }

        //  distructure //
    const {name,cost,picture}=order;

                       
       
    return (
        <div>
            <h1>place Order</h1>
               <Container>
                    <div className="border border-info p-3 d-lg-flex align-items-center shadow-lg p-3 mb-5 bg-white rounded">
                    <img  className="img-fluid w-50" src={picture} alt=""/>
                    <div className="mx-4">
                        <h4>{name}</h4>
                        <h5> M.R.P :$ {cost }</h5>
                    </div>
                    
                    </div>
                    <UserInputs
                     order={order}
                    ></UserInputs>
               </Container>


            
        </div>
    );
};

export default PlaceOrder;