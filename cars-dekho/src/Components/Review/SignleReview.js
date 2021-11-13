import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Review.css"
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const SignleReview = ({review}) => {
    const userIcon = <FontAwesomeIcon icon={faUserCircle} />
    return (
        <>
             
             <Card className="mx-2">
                 <Card.Title> Review By  :<span className="text-success"> {userIcon}  {review.users.name}</span></Card.Title>
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