import React from 'react';

const Order = ({order}) => {


    const {name,picture,status}=order.purchase

    const handleUpdate=e=>{ 

        fetch(`https://enigmatic-escarpment-30976.herokuapp.com/orders/${order._id}`,{
            method:"PUT",
              headers: { "content-type" :'application/json'},

            body:JSON.stringify(order.purchase)
        })
        alert("order Updated")

        window.location.reload()
      

    }

    const handleDelete=(id)=>{

     const agree=  window.confirm("Are You Sure want to delete this ? ")
       if(agree){
        fetch(`https://enigmatic-escarpment-30976.herokuapp.com/orders/${id}`,{
            method:'DELETE',
            headers: { "content-type" :'application/json'}
        }).then(res=>res.json()).then(data=>{
        });
        

  }
  window.location.reload()
    alert("deleted")
       }
    return (
        <div className="container my-5 border border-3 shadow-lg p-3 mb-5 rounded">
            <div className=" border border-info p-3 m-3  text-info">
            <h1>User Name  : {order.name} </h1>
               <div className="d-flex align-items-center">
                   <img className="w-50 me-5" src={picture} alt="" />
                   <div>
                   <h4>{name}</h4>
                   <h5> status : {order.status}</h5>
           </div>
            </div>
            <button onClick={()=>handleDelete(order._id)} className="btn-danger p-3 text-light border rounded-3 m-3">Delete</button>
            <button onClick={handleUpdate} className="btn-warning p-3 text-light m-3 border rounded-3">Activate</button>
                   </div>
                   <div>
                  
                   </div>

        </div>
    );
};

export default Order;