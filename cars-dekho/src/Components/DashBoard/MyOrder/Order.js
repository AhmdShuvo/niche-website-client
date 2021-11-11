import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Order = ({order}) => {


    const handleDelete=e=>{

     const confirmation=  window.confirm(`Are You sure want to delete ${order.purchase.name} from You order ?`)

       if( confirmation){
        fetch(`http://localhost:9000/order/${order._id}`,{
            method:'Delete',
            headers:{ "content-type": 'application/json'},
                   body:JSON.stringify(order)
     
          })
       }

        window.location.reload()
                  
        e.preventDefault()
    }

         const {name,price,picture,about}= order.purchase
    return (
                    
        <>
               <Container>
                   
              
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={picture}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about.slice(0,100)}
          </Card.Text>
        </Card.Body>
         <Button onClick={handleDelete} className="btn-danger p-2 fs-3">Delete order</Button>
      </Card>
      </Container>
      </>
    );
};

export default Order;