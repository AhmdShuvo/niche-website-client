import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card} from 'react-bootstrap';

const Car = ({car}) => {
    const {name,cost,about,picture,company}=car;

    return (
        <div>
             <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '22rem' }}>
  <Card.Img  variant="top" src={picture} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {about.slice(0,378)}
    </Card.Text>
    <Button style={{backgroundColor:"orangered",padding:'10px',color:'white',borderRadius:'10px',fontFamily:'sans-serif'}}>Order Now</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Car;