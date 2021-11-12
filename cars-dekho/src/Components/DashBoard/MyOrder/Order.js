import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Order = ({order}) => {


    const handleDelete=e=>{

     const confirmation=  window.confirm(`Are You sure want to delete ${order.purchase.name} from You order ?`)

       if( confirmation){
        fetch(`https://enigmatic-escarpment-30976.herokuapp.com/order/${order._id}`,{
            
            method:'DELETE',
            headers: { "content-type" :'application/json'}
        }).then(res=>res.json()).then(data=>{
            console.log(data);
        });
       }

        alert("Order Deleted")
       window.location.reload()
                  
    }

         const {name,price,picture,about}= order.purchase
    return (
                    
        <div>          
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={picture}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about}
          </Card.Text>
          <div className="border border-info p-3 ">
            <h4> status : {order.status}</h4>
          </div>
        </Card.Body>
         <Button onClick={handleDelete} className="btn-danger p-2 fs-3">Delete order</Button>
      </Card>
     
      </div>
    );
};

export default Order;