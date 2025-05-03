import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loader}=use(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    
    if(loader){
        return <span className="loading loading-dots loading-xl"></span>
    }

    if(!user){
return <Navigate state={location?.pathname} to ="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;