import React from 'react';
import { Redirect, Route } from 'react-router';

import useAuth from '../../Hooks/useAuth';

const PrivateRoute = (props) => {
        

    const {children,...rest}=props
    const {user,isLoading}=useAuth()
    
                    
    if(isLoading){

        return <div className="d-flex justify-content-center ">
        <div className="spinner-border" role="status">
          
        </div>
        <h3 className="sr-only">Loading...</h3>
      </div>
    }
   
    
    return (

        <Route
        {...rest}
        render={({location})=> user.email?children:<Redirect to={{pathname:"/login",state:{from:{location}}
    
    }}></Redirect>}

     >
           
            
        </Route>
    );
};

export default PrivateRoute;