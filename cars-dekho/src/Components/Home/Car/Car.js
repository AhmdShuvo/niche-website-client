import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Car = ({car}) => {
    const {name,cost,about,picture,company,_id}=car;
    const url=`/product/${_id}`

    return (
        <div>
             <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '22rem' }}>
  <Card.Img  variant="top" src={picture} />

  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <h4 style={{color:'saddlebrown'}} className="fs-5">M.R.P : $ {cost}</h4>
    <Card.Text>
     {about.slice(0,378)}
    </Card.Text>
        
    <NavLink to={url}><Button style={{backgroundColor:"orangered",padding:'10px',color:'white',borderRadius:'10px',fontFamily:'sans-serif'}}>Order Now</Button></NavLink>
  </Card.Body>
</Card>
        </div>
    );
};

export default Car;