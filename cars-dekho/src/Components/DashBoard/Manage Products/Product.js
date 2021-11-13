import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

const Product = ({car}) => {

    const {name,picture,_id}=car

    const handleDelete=(id)=>{

        const agree=  window.confirm("Are You Sure want to delete this ? ")
          if(agree){
           fetch(`https://enigmatic-escarpment-30976.herokuapp.com/cars/${_id}`,{
               method:'DELETE',
               headers: { "content-type" :'application/json'}
           }).then(res=>res.json()).then(data=>{
           });
            

           alert("Car data deleted successfully")
             
           window.location.reload()
     }
    }
    return (
        <Container className="">
            <div className="bg-dark text-light m-2 ">
             <div className="d-flex align-items-center m-2 p-3">
                   <img className="w-50 me-5" src={picture} alt="" />
                   <div>
                   <h5>{name}</h5>
                    
                    <Button onClick={handleDelete} className="btn-warning text-light fs-5 border rounded-3">Delete</Button>
           </div>
            </div>
        </div>
        </Container>
    );
};

export default Product;