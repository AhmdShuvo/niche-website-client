import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
          <Link className="navbar-brand text-dark" to="/signup">New User ? SignUp Now</Link>
            
        </div>
    );
};

export default Login;