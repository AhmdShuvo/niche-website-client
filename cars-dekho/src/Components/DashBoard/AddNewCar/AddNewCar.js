import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container} from 'react-bootstrap';

const AddNewCar = () => {
    const element = <FontAwesomeIcon icon={faUpload} />

   const [CarData,setData]=useState({})
               
    const handleChange=e=>{
        const field= e.target.name
        const value=e.target.value
     const newLogindata={...CarData}
     newLogindata[ field ]=value;
     setData(newLogindata)
    }


    const handleUpload=e=>{

                const data=CarData
              fetch("https://enigmatic-escarpment-30976.herokuapp.com/cars",{
        
             method:"POST",headers:{"content-type":'application/json'},
             body:JSON.stringify(data)
        
             })

             alert('car Details adeed')

             e.preventDefault()
        
            }

       
            
            


    return (
        <Container>
            <h1>Add New Car</h1>

            <form className="container" onSubmit={handleUpload} >

      <h4>Name:<input onChange={handleChange} name="name"  className="form-control my-2" type="text" placeholder="name" required /></h4>
            <h4>picture URL:<input onChange={handleChange}  name="picture" className="form-control my-2" type="text" placeholder="Photo URL" /></h4>
            <h4>cost : <input onChange={handleChange}  name="cost" className="form-control my-2" type="number" placeholder="Cost" required  /></h4>
            <h4>company : <input onChange={handleChange}  name="company" className="form-control my-2" type="text" placeholder="Company" required  /></h4>
            <h4>about : <input onChange={handleChange} name="about"  className="form-control my-2" type="text" placeholder="About"  required /></h4>
           
          

            <button className="btn-warning text-light p-3 border rounded-3 fs-4" type="submit">upload  {element} </button>
          </form>
        </Container>
    );
};

export default AddNewCar;