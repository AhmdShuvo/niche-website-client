import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./Review.css"

const SignleReview = ({review}) => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <>
             
             <Card className="mx-2">
                 <Card.Title> Review By  :<span className="text-success">{review.users.name}</span></Card.Title>
                 <div className="border border-info p-3">
                 <Card.Text> Feedback</Card.Text>
                 <Card.Text> {review.Feedback}</Card.Text>
                
                 
                 </div>
                 <Rating
                 initialRating={review.stars}
                  emptySymbol="far fa-star "
                  fullSymbol="fas fa-star  icon-color "
                  readonly
                 ></Rating>
             </Card>
        </>

    );
};

export default SignleReview;