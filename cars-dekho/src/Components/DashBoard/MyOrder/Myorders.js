import React from 'react';
import { useParams } from 'react-router';

const Myorders = () => {

    const {email}=useParams()
    return (

        
        <div>
            Order of {email}
        </div>
    );
};

export default Myorders;