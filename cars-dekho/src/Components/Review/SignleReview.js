import React from 'react';
import { Card } from 'react-bootstrap';

const SignleReview = ({review}) => {
    return (
        <>
             
             <Card className="mx-2">
                 <Card.Title> Review By  :<span className="text-success">{review.users.name}</span></Card.Title>
                 <div className="border border-info p-3">
                 <Card.Text> Feedback</Card.Text>
                 <Card.Text> {review.Feedback}</Card.Text>
                 </div>
                 <Card.Text> stars {review.stars}</Card.Text>
             </Card>
        </>

    );
};

export default SignleReview;